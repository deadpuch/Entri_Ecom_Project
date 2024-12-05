import mongoose from "mongoose";
import { PRODUCT } from "../models/productModel.js";
import { cloudnaryInstance } from "../config/cloudinary.js";

import pLimit from "p-limit";
const limit = pLimit(4);

export const sellerAddProduct = async (req, res, next) => {
  try {
    const {
      productName,
      productImage,
      Product_Quantity,
      unit,
      price,
      thumbnail,
      productDescription,
      cateogory,
      review,
      seller_data,
    } = req.body;

    if (!productName || !price || !Product_Quantity || !unit) {
      return res.status(400).json({ message: "field required" });
    }

    const arrayImage = req.files.itemImage;
    const thumbImg = req.files.thumbnail[0];

    const itemImg = arrayImage.map((file) =>
      limit(async () => {
        const imageUrl = (await cloudnaryInstance.uploader.upload(file.path))
          .url;
        return imageUrl;
      })
    );
    let itemImages = await Promise.all(itemImg);

    const thumbImage = (await cloudnaryInstance.uploader.upload(thumbImg.path))
      .url;

    const newProduct = new PRODUCT({
      productName,
      productImage: itemImages,
      Product_Quantity,
      unit,
      price,
      thumbnail: thumbImage,
      productDescription,
      cateogory,
      review,
      seller_data: req.sales.id,
    });

    await newProduct.save();

    res.json({ message: "seller product added successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const sellerProducts = async (req, res, next) => {
  try {
    const userId = req.sales.id;

    const fetchedItems = await PRODUCT.find({ seller_data: userId });

    res.json({ message: "product fetch successfully", data: fetchedItems });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const individualProducts = async (req, res, next) => {
  try {
    const userId = req.sales.id;
    const { productId } = req.params;

    const fetchedItems = await PRODUCT.findById(productId , {user_data:userId });
    res.json({ message: "product fetch successfully", data: fetchedItems });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const sellerEditProduct = async (req, res, next) => {
  try {
    const {
      productName,
      Product_Quantity,
      unit,
      price,
      productDescription,
      review,
      category,
    } = req.body;

    const updateFields = {}; // Object to dynamically store fields to update

    // Process product images if provided
    if (req.files.itemImage && req.files.itemImage.length > 0) {
      const arrayImage = req.files.itemImage;
      const itemImg = arrayImage.map((file) =>
        limit(async () => {
          const imageUrl = (await cloudnaryInstance.uploader.upload(file.path))
            .url;
          return imageUrl;
        })
      );
      updateFields.productImage = await Promise.all(itemImg);
    }

    // Process thumbnail image if provided
    if (req.files.thumbnail && req.files.thumbnail.length > 0) {
      const thumbImg = req.files.thumbnail[0];
      updateFields.thumbnail = (
        await cloudnaryInstance.uploader.upload(thumbImg.path)
      ).url;
    }

    // Update other fields if provided in the body
    if (productName) updateFields.productName = productName;
    if (Product_Quantity) updateFields.Product_Quantity = Product_Quantity;
    if (unit) updateFields.unit = unit;
    if (price) updateFields.price = price;
    if (productDescription)
      updateFields.productDescription = productDescription;
    if (category) updateFields.category = category;
    if (review) updateFields.review = review;

    const { productId } = req.params;

    // Validate product ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    // Update the product with only the provided fields
    await PRODUCT.updateOne({ _id: productId }, { $set: updateFields });

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const deleteProducts = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.json({ message: "product not found" });
    }

    await PRODUCT.deleteOne({ _id: productId });

    res.json({ message: "item deleted successfullty" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
