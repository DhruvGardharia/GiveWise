import db from "../config/db.js";


export const registerDonation = async (req, res) => {
  const { name, email, contact, amount, mode, eventId } = req.body;
  const date = new Date();

  try {
    // Insert donor
    const [donorResult] = await db.execute(
      "INSERT INTO Donor (name, contact, email) VALUES (?, ?, ?)",
      [name, contact, email]
    );
    const donorId = donorResult.insertId;

    // Insert into Funds table
    await db.execute(
      "INSERT INTO Funds (Donor_id, amount, mode, date) VALUES (?, ?, ?, ?)",
      [donorId, amount, mode, date]
    );

    // If it's a specific event donation, insert into Donation_Event
    if (eventId) {
      await db.execute(
        "INSERT INTO Donation_Event (Donor_id, Event_id, amount, mode, date) VALUES (?, ?, ?, ?, ?)",
        [donorId, eventId, amount, mode, date]
      );
    }

    res.status(201).json({ message: "Donation registered successfully" });
  } catch (error) {
    console.error("Error registering donation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: Get all donations to events
export const getEventDonations = async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT d.name AS donor_name, e.name AS event_name, de.amount, de.mode, de.date 
       FROM Donation_Event de
       JOIN Donor d ON de.Donor_id = d.Donor_id
       JOIN Event e ON de.Event_id = e.Event_id`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch donations to events' });
  }
};
