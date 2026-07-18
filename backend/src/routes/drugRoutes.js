import express from "express";
import drugController from "../controllers/drugController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Drug Routes
|--------------------------------------------------------------------------
*/

router.get("/", drugController.getAllDrugs);

router.get("/:id", drugController.getDrugById);

router.post("/", drugController.createDrug);

router.put("/:id", drugController.updateDrug);

router.delete("/:id", drugController.deleteDrug);

export default router;