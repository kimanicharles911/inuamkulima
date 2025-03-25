import { TransactionModel } from "../models/TransactionModel.js";

const createTransactionFunc = async (req, res) => {
  try {
    const { productName, quantity, pricePerUnit, totalPrice } = req.body;

    if ( !productName || typeof quantity !== "number" || typeof pricePerUnit !== "number" || typeof totalPrice !== "number") {
      return res.status(400).send("All fields (productName, quantity, pricePerUnit, totalPrice) are required.");
    }

    const newTransaction = new TransactionModel({
      productName,
      quantity,
      pricePerUnit,
      totalPrice,
    });

    const result = await newTransaction.save();
    return res.status(201).send(result);

  } catch (err) {
    return res.status(400).send(`Problem recording transaction. ${err.message}`);
  }
};

export { createTransactionFunc };
