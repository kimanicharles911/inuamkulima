import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  bankAccount: { type: String, required: true },
  products: { type: String, required: true } 
});

const MerchantModel = mongoose.model("merchants", merchantSchema);

export { MerchantModel };
