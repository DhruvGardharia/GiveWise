import db from "../config/db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "ngomanage";

export const assignEventToVolunteer = async (req, res) => {
  const { Volunteer_id, Event_id } = req.body;
  const date = new Date();

  try {
    // Insert record
    await db.execute(
      "INSERT INTO Volunteer_Event (Volunteer_id, Event_id, date) VALUES (?, ?, ?)",
      [Volunteer_id, Event_id, date]
    );

    res
      .status(201)
      .json({ message: "Event assigned to volunteer successfully." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res
        .status(400)
        .json({ message: "This event is already assigned to this volunteer." });
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

export const getVolunteerEvents = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, JWT_SECRET);
    const Volunteer_id = decoded.volunteer_id; 
    console.log("Volunteer ID:", Volunteer_id);

    if (!Volunteer_id) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const [rows] = await db.execute(
      `
        SELECT 
          ve.Event_id AS Event_id, 
          e.name AS event_name, 
          ve.date AS assigned_date
        FROM 
          Volunteer_Event AS ve
        INNER JOIN 
          event AS e ON ve.Event_id = e.Event_id
        WHERE 
          ve.Volunteer_id = ?
      `,
      [Volunteer_id]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("❌ Error fetching volunteer events:", error);
    res.status(500).json({ message: "Error fetching volunteer events." });
  }
};


export const deleteVolunteerAssignment = async (req, res) => {
  const { Volunteer_id, Event_id } = req.body;
  console.log(Volunteer_id, Event_id);
  try {
    const [result] = await db.execute(
      "DELETE FROM Volunteer_Event WHERE Volunteer_id = ? AND Event_id = ?",
      [Volunteer_id, Event_id]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Assignment deleted successfully." });
    } else {
      res.status(404).json({ message: "Assignment not found." });
    }
  } catch (error) {
    console.error("❌ Error deleting assignment:", error);
    res.status(500).json({ message: "Error deleting assignment." });
  }
};