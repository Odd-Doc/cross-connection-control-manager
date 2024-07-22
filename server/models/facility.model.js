import mongoose from "mongoose";
const Schema = mongoose.Schema;

//backflow device schema & model

const facilitySchema = new Schema({
    name: { type: String, required: true },
    address: { 
        street:{ type: String, required: true },
        city:{ type: String, required: true },
        state:{ type: String, required: true },
        zip:{ type: Number, required: true },
    },
    devices: {type: mongoose.Schema.Types.ObjectId,
    ref: 'Device'}
})

export const FacilityModel = mongoose.model("Device", deviceSchema);