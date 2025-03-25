// Comments are found in the last part of this file.
import { ProductModel } from "../models/ProductModel.js";

const createProductFunc = async (req, res) => {
  try {
    const { name, category, price, inStock, description } = req.body;

  if (!name || !category || typeof price !== "number" || typeof inStock !== "boolean" || !description) {
    return res.status(400).send('All fields (name, category, price, inStock, description) are required.');
  }

  const newProduct = new ProductModel({
    name,
    category,
    price,
    inStock,
    description
  });

  const result = await newProduct.save();
  return res.status(201).send(result);

  } catch (err) {
    return res.status(400).send(`Problem creating farm product record. ${err.message}`);
  }
};

export { createProductFunc };