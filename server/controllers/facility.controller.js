import { Facility } from "../models/facility.model.js";
import { Device } from "../models/device.model.js";
export const addFacility = async (req, res) => {
  console.log("facility added");
  // const newFacility = new Facility({
  //   name: req.body.name,
  //   address: {
  //     street: req.body.street,
  //     city: req.body.city,
  //     state: req.body.state,
  //     zip: req.body.zip,
  //   },
  //   devices: {},
  // });
  var deviceToAdd = await Device.findById("66a131bb106cb22b36983974");
  const newFacility = new Facility({
    name: "Doc's Surplus",
    address: {
      street: "8982 NotSoGreat Southwest Pkwy ",
      city: "Grand Prairie",
      state: "TX",
      zip: 75050,
    },
    devices: [deviceToAdd],
  });
  newFacility.save();

  res.json({ newFacility });
};
