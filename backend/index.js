import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

import donationRoutes from "./routes/donationRoutes.js";
app.use("/api/donation", donationRoutes);

import volunteerRoutes from "./routes/volunteerRoutes.js";
app.use("/api/volunteers", volunteerRoutes);

import eventRoutes from "./routes/eventRoutes.js";
app.use("/api/events", eventRoutes);
import itemRoutes from "./routes/itemRoutes.js";
app.use("/api/items", itemRoutes);

import volunteerEventRoutes from "./routes/volunteerEventRoutes.js";
app.use("/api/volunteer-event",volunteerEventRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
