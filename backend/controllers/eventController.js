import pool from "../config/db.js";

export const registerEvent = async (req, res) => {
  const { name, date, items, no_of_attendees } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO Event (name, date, items, no_of_attendees) VALUES (?, ?, ?, ?)",
      [name, date, items, no_of_attendees]
    );
    res.status(201).json({ message: "Event registered successfully", eventId: result.insertId });
  } catch (err) {
    console.error("Error registering event:", err);
    res.status(500).json({ message: "Server error while registering event" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const [events] = await pool.query("SELECT * FROM Event");
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Server error while fetching events" });
  }
};
