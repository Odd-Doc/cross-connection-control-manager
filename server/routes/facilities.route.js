import express from "express";
const router = express.Router();
import { addFacility } from "../controllers/facility.controller.js";

router.post("/addFacility", addFacility);

export default router;
