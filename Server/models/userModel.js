import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    User_name: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      unique: true,
      required: true,
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

    Address: {
      type: mongoose.Types.ObjectId,
      ref: "address",
    },
  },

  {
    timestamps: true,
  }
);

export const User = mongoose.model("users", userSchema);
