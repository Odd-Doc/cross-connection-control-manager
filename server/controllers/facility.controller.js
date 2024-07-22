import { FacilityModel } from "../models/facility.model.js";

export const getDevice = async (req, res)=>{
    const foundDevice = await DeviceModel.findOne()
   
   console.log("get device")
    res.send({foundDevice})
}
export const addDevice =  (req, res)=>{  console.log("device added")
     const newDevice =  new DeviceModel({
        manufacturer: "Watts",
        model: "LF009QT",
        size: 1,
        type: "rp"
    });
    newDevice.save();
    
  
      res.json({newDevice})
}


