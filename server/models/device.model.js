import mongoose from "mongoose";
const Schema = mongoose.Schema;

//backflow device schema & model

const deviceSchema = new Schema({
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true }
})

module.exports = mongoose.model("Device", deviceSchema);