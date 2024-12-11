import mongoose from "mongoose";

const salesModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company_name: {
      type: String,
      required: true,
      unique: true,
    },

    mobile: {
      type: Number,
      required: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
    },

    profilePic: {
      type: String,
      default:
        "https://res.cloudinary.com/dcojdq9rw/image/upload/v1733554206/default_profile_hdwxs6.jpg",
    },

    Active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SELLER = mongoose.model("salesusers", salesModel);
