import express from "express";
import { registerVolunteer, getAllVolunteers } from "../controllers/volunteerController.js";

const router = express.Router();

router.post("/register", registerVolunteer);
router.get("/all", getAllVolunteers);

export default router;
