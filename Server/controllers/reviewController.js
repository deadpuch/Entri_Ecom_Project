import { REVIEW } from "../models/reviewModel.js";
import { PRODUCT } from "../models/productModel.js";
import { Order } from "../models/order.js";

import mongoose from "mongoose";

export const createReview = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { rating, comment} = req.body;
    const userId = req.user.id;
   

    const order = await Order.findOne({
      user: req.user.id,
      products: { $elemMatch: { productId: productId } },
    });

   
    

    if (order.paymentStatus !== "Completed") {
      return res
        .status(401)
        .json({ message: "Feedback allowed only after purchase." });
    }

    // Create the review
    const review = await REVIEW.create({
      userId,
      productId,
      rating,
      comment,
      user_data:userId, // Save complete user data
    });

    // Link the review to the product
    await PRODUCT.findByIdAndUpdate(productId, {
      $push: { review: review._id },
    });

    res.status(201).json({
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
};

export const allReview = async (req, res, next) => {
  try {
    const { userId } = req.user.id;

    const reviews = await REVIEW.find(userId).populate(
      "userId",
      "User_name profilePic"
    );

    if (!reviews.length) {
      return res
        .status(404)
        .json({ message: "No reviews found for this product" });
    }

    res
      .status(200)
      .json({ message: "reivew fetched successfully", data: reviews });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const productReview = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const reviews = await REVIEW.find({ productId: productId }).populate(
      "user_data",
      "User_name profilePic"
    );

    if (!reviews.length) {
      return res
        .status(404)
        .json({ message: "No reviews found for this product" });
    }

    res
      .status(200)
      .json({ message: "reivew fetched successfully", data: reviews });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user.id;

    const review = await REVIEW.findOneAndDelete(
      { _id: reviewId },
      { user_data: userId }
    );

    if (!review) {
      return res
        .status(404)
        .json({ message: "Review not found or not authorized" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
