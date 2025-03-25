import { FarmerModel } from "../models/FarmerModel.js";

const addFarmerFunc = async (req, res) => {
  const walletBalance = 250000;
  try {
    const { name, location, contact, mpesaMobileNumber, bankAccount, crops_and_livestock } = req.body;

    if (!name || !location || !contact || 
        !mpesaMobileNumber || !bankAccount || !crops_and_livestock) {
      return res.status(400).send("All fields (name, location, contact, walletBalance, mpesaMobileNumber, bankAccount, crops_and_livestock) are required.");
    }

    const newFarmer = new FarmerModel({
      name,
      location,
      contact,
      walletBalance,
      mpesaMobileNumber,
      bankAccount,
      crops_and_livestock
    });

    const result = await newFarmer.save();
    return res.status(201).send(result);

  } catch (err) {
    return res.status(400).send(`Problem creating farmer record. ${err.message}`);
  }
};

const getFarmerFunc = async (req, res) => {
  try {
    const result = await FarmerModel.find();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send(`Problem getting farmer record(s). ${err.message}`);
  }
};

export { addFarmerFunc, getFarmerFunc };
