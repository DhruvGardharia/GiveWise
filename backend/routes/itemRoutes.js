import express from "express";
import { getAllItems } from "../controllers/itemController.js";

const router = express.Router();
router.get("/all", getAllItems);

export default router;
