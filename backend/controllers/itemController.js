import pool from "../config/db.js";

export const getAllItems = async (req, res) => {
  try {
    const [items] = await pool.query("SELECT * FROM Item");
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const addItem = async (req, res) => {
  const { donor_id, name, quantity, date } = req.body;

  if (!name || !quantity || !date) {
    return res.status(400).json({ message: "Name, quantity, and date are required." });
  }

  try {
    const [result] = await pool.query("CALL AddItem(?, ?, ?, ?)", [
      donor_id || null,
      name,
      quantity,
      date,
    ]);

    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Server error" });
  }
};
