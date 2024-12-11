import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category: [
    {
      name: {
        type: String,
        default: "ALL",
      },

      product: {
        type: mongoose.Types.ObjectId,
        ref: "products",
      },
    },
  ],
});

export const Category = mongoose.model("Category", categorySchema);
