import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  walletBalance: { type: Number, required: true, default: 0 }, 
  mpesaMobileNumber: { type: String, required: true }, 
  bankAccount: { type: String, required: true },
  crops_and_livestock: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now } 
});

const FarmerModel = mongoose.model("farmers", farmerSchema);
export { FarmerModel };
