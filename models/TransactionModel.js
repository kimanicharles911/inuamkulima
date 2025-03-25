import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const TransactionModel = mongoose.model("transactions", transactionSchema);
export { TransactionModel };
