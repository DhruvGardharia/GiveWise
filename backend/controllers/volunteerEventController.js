import db from "../config/db.js";

export const assignEventToVolunteer = async (req, res) => {
  const { Volunteer_id, Event_id } = req.body;
  const date = new Date();

  try {
    // Insert record
    await db.execute(
      "INSERT INTO Volunteer_Event (Volunteer_id, Event_id, date) VALUES (?, ?, ?)",
      [Volunteer_id, Event_id, date]
    );

    res.status(201).json({ message: "Event assigned to volunteer successfully." });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: "This event is already assigned to this volunteer." });
    } else {
      console.error("Assignment error:", error);
      res.status(500).json({ message: "Server error while assigning event." });
    }
  }
};
export const getVolunteerAssignments = async (req, res) => {
    try {
      const [rows] = await db.execute(`
        SELECT 
          ve.Volunteer_id           AS Volunteer_id, 
          v.name                    AS volunteer_name, 
          ve.Event_id               AS Event_id, 
          e.name                    AS event_name, 
          ve.date                   AS assigned_date
        FROM 
          Volunteer_Event AS ve
        INNER JOIN 
          Volunteer AS v ON ve.Volunteer_id = v.Volunteer_id
        INNER JOIN 
          event AS e ON ve.Event_id = e.Event_id
      `);
  
      res.status(200).json(rows);
    } catch (error) {
      console.error("❌ Error fetching volunteer-event assignments:", error);
      res.status(500).json({ message: "Error fetching assignments." });
    }
  };
  
  