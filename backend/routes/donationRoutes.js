import express from "express";
import { getEventDonations, registerDonation } from "../controllers/donationController.js";

const router = express.Router();

router.post("/donate", registerDonation);
// router.get("/all", getAllDonors);


router.get('/oneevent', getEventDonations);


export default router;

