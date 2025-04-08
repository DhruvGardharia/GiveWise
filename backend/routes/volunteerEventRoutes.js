import express from "express";
import { assignEventToVolunteer, getVolunteerAssignments } from "../controllers/volunteerEventController.js";

const router = express.Router();

router.post("/assign", assignEventToVolunteer);
router.get("/assignments", getVolunteerAssignments);

export default router;
