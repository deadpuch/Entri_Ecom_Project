import mongoose, { Schema } from "mongoose";

const addressSchema = mongoose.Schema({
  Address: {
    type: String,
    required: true,
  },

  City: {
    type: String,
    required: true,
  },

  State: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },

  Zip: {
    type: Number,
    required: true,
  },

  Mobile: {
    type: Number,
    required: true,
  },

  Name: {
    type: String,
    required: true,
  },

  user_data: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

export const ADDRESS = mongoose.model("address", addressSchema);
