import express from "express";
import { addDevice, getDevice } from "../controllers/device.controller.js";
const router = express.Router();

router.post("/addDevice", addDevice);

export default router;
