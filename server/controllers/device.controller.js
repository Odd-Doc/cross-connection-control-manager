import { Device } from "../models/device.model.js";

export const getDevice = async (req, res) => {
  const foundDevice = await Device.findOne();

  console.log("get device");
  res.send({ foundDevice });
};
export const addDevice = async (req, res) => {
  console.log("device added");
  // const newDevice = new Device({
  //   manufacturer: "Watts",
  //   model: "LF009QT",
  //   size: 1,
  //   type: "rp",
  //   serialNumber: "HS-29086",
  // });
  const newDevice = new DeviceModel({
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    size: req.body.size,
    type: req.body.type,
    serialNumber: req.body.serialNumber,
  });
  newDevice.save();

  res.json({ newDevice });
};
