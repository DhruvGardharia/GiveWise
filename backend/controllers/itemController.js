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
