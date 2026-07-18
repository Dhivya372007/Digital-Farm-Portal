import express from "express";
import alertController from "../controllers/alertController.js";

const router = express.Router();


router.get("/", alertController.getAllAlerts);

router.get("/:id", alertController.getAlertById);

router.post("/", alertController.createAlert);


export default router;