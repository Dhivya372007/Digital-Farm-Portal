import express from "express";
import withdrawalController from "../controllers/withdrawalController.js";

const router = express.Router();

router.post("/calculate", withdrawalController.calculateWithdrawal);

export default router;