import express from "express";
import cors from "cors";
import "dotenv/config.js";
import deviceRouter from "./routes/devices.route.js";
import facilityRouter from "./routes/facilities.route.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const uri = process.env.DB_URI;
mongoose.connect(uri);

//#region Routes
app.use("/device", deviceRouter);
app.use("/facilities", facilityRouter);

//#endregion

const listener = app.listen(process.env.PORT || 3001, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
