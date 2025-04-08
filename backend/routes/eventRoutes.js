import express from "express";
import { registerEvent, getAllEvents } from "../controllers/eventController.js";

const router = express.Router();

router.post("/add", registerEvent);
router.get("/all", getAllEvents);

export default router;
