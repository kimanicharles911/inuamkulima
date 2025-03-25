import { MerchantModel } from "../models/MerchantModel.js";

const addMerchantFunc = async (req, res) => {
  try {
    const { name, location, contact, bankAccount, products } = req.body;

    if (!name || !location || !contact || !bankAccount || !products) {
      return res.status(400).send(
        "All fields (name, location, contact, bankAccount, products) are required."
      );
    }

    const newMerchant = new MerchantModel({
      name,
      location,
      contact,
      bankAccount,
      products
    });

    const result = await newMerchant.save();
    return res.status(201).send(result);

  } catch (err) {
    return res.status(400).send(`Problem creating merchant record. ${err.message}`);
  }
};

const getMerchantsFunc = async (req, res) => {
  try {
    const result = await MerchantModel.find();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send(`Problem getting merchant record(s). ${err.message}`);
  }
};

export { addMerchantFunc, getMerchantsFunc };
