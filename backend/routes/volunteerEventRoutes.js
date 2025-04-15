import express from "express";
import { assignEventToVolunteer, deleteVolunteerAssignment, getVolunteerAssignments, getVolunteerEvents } from "../controllers/volunteerEventController.js";
import { verifyVolunteerToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/assign", assignEventToVolunteer);
router.get("/assignments", getVolunteerAssignments);
router.get("/events/:token", getVolunteerEvents);
router.post("/delete",deleteVolunteerAssignment)

export default router;
