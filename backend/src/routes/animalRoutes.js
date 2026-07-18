import express from "express";
import animalController from "../controllers/animalController.js";

const router = express.Router();

router.get("/", animalController.getAllAnimals);

router.get("/:id", animalController.getAnimalById);

router.post("/", animalController.createAnimal);

router.put("/:id", animalController.updateAnimal);

router.delete("/:id", animalController.deleteAnimal);

export default router;