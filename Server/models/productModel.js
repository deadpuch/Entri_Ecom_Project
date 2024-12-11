import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    productImage: [
      {
        type: [String],
        default: () => [
          "https://res.cloudinary.com/dcojdq9rw/image/upload/v1733554359/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz_sk5xvo.jpg",
        ],
      },
    ],

    Product_Quantity: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    thumbnail: {
      type: String,
      default:
        "https://res.cloudinary.com/dcojdq9rw/image/upload/v1733554359/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz_sk5xvo.jpg",
    },

    productDescription: {
      type: String,
    },

    category: {
      type: String,
      default: "All",

    },

    admin_data: {
      type: mongoose.Types.ObjectId,
      ref: "admin",
    },

    seller_data: {
      type: mongoose.Types.ObjectId,
      ref: "salesusers",
    },

    review: [{ type: mongoose.Types.ObjectId, ref: "review" }],
  },

  {
    timestamps: true,
  }
);

export const PRODUCT = mongoose.model("products", productSchema);
