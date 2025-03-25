// Comments are found in the last part of this file.
import { ProductModel } from "../models/ProductModel.js";

const createProductFunc = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

  if (!name || !category || typeof price !== "number" || !description) {
    return res.status(400).send('All fields (name, category, price, description) are required.');
  }

  const newProduct = new ProductModel({
    name,
    category,
    price,
    description
  });

  const result = await newProduct.save();
  return res.status(201).send(result);

  } catch (err) {
    return res.status(400).send(`Problem creating farm product record. ${err.message}`);
  }
};

export { createProductFunc };