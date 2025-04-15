import express from "express";
import { addItem, getAllItems } from "../controllers/itemController.js";

const router = express.Router();
router.get("/all", getAllItems);
router.post("/add", addItem);

export default router;
