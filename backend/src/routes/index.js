import express from "express";

import authRoutes from "./authRoutes.js";
import animalRoutes from "./animalRoutes.js";
import drugRoutes from "./drugRoutes.js";
import withdrawalRoutes from "./withdrawalRoutes.js";
import alertRoutes from "./alertRoutes.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| API Status
|--------------------------------------------------------------------------
*/

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Digital Farm Backend API is running."
  });
});

/*
|--------------------------------------------------------------------------
| Feature Routes
|--------------------------------------------------------------------------
*/

router.use("/auth", authRoutes);

router.use("/animals", animalRoutes);

router.use("/drugs", drugRoutes);

router.use("/withdrawal", withdrawalRoutes);

router.use("/alerts", alertRoutes);

export default router;