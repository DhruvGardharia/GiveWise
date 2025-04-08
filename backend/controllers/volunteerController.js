import db from "../config/db.js";

// Register a new volunteer
export const registerVolunteer = async (req, res) => {
  const { name, contact, email } = req.body;

  if (!name || !contact || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO Volunteer (name, contact, email) VALUES (?, ?, ?)",
      [name, contact, email]
    );
    res.status(201).json({ message: "Volunteer registered successfully", volunteerId: result.insertId });
  } catch (error) {
    console.error("Volunteer Registration Error:", error);
    res.status(500).json({ message: "Server error while registering volunteer" });
  }
};

// Get all volunteers (optional)
export const getAllVolunteers = async (req, res) => {
  try {
    const [volunteers] = await db.execute("SELECT * FROM Volunteer");
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers" });
  }
};
