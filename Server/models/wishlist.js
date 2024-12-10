import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    unique: true, // Ensures one wishlist per user
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  ],
}, { timestamps: true });

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);


