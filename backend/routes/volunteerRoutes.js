import express from "express";
import { registerVolunteer, getAllVolunteers, loginVolunteer } from "../controllers/volunteerController.js";

const router = express.Router();

router.post("/register", registerVolunteer);
router.get("/all", getAllVolunteers);
router.post("/login",loginVolunteer)

export default router;
