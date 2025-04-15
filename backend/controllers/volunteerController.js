import db from "../config/db.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Register a new volunteer
export const registerVolunteer = async (req, res) => {
  const { name, contact, email, password } = req.body;

  if (!name || !contact || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if email already exists
    const [existing] = await db.execute("SELECT * FROM Volunteer WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert volunteer into the database
    const [result] = await db.execute(
      "INSERT INTO Volunteer (name, contact, email, password) VALUES (?, ?, ?, ?)",
      [name, contact, email, hashedPassword]
    );

    res.status(201).json({
      message: "Volunteer registered successfully",
      volunteerId: result.insertId
    });

  } catch (error) {
    console.error("Volunteer Registration Error:", error);
    res.status(500).json({ message: "Server error while registering volunteer" });
  }
};


const JWT_SECRET = "ngomanage"; 

export const loginVolunteer = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required." });

  try {
    const [rows] = await db.execute("SELECT * FROM Volunteer WHERE email = ?", [email]);
    const volunteer = rows[0];
    console.log("Volunteer Data:", volunteer);

    if (!volunteer) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, volunteer.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    console.log("Volunteer ID:", volunteer.Volunteer_id);

    const token = jwt.sign({ volunteer_id: volunteer.Volunteer_id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      volunteer: {
        id: volunteer._id,
        name: volunteer.name,
        email: volunteer.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
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

