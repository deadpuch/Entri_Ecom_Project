import mongoose, { Schema } from "mongoose";

const addressSchema = mongoose.Schema({
  Address_line_1: {
    type: String,
    required: true,
  },

  Address_line_2: {
    type: String,
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

  user_data: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

export const ADDRESS = mongoose.model("address", addressSchema);
