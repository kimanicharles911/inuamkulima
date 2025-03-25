import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  walletBalance: { type: Number, required: true, default: 0 }, // Farmer's digital wallet balance
  mpesaMobileNumber: { type: String, required: true }, // Mobile money payment number
  bankAccount: { type: String, required: true }, // Bank account details
  crops_and_livestock: { type: String, required: true }, // Types of crops/livestock the farmer owns
  registrationDate: { type: Date, default: Date.now } // When the farmer registered
});

const FarmerModel = mongoose.model("farmers", farmerSchema);
export { FarmerModel };
