import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
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
  },

  {
    timestamps: true,
  }
);

export const ADMIN = mongoose.model("admin", adminSchema);
