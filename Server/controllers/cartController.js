import mongoose from "mongoose";
import { Cart } from "../models/cartModel.js";
import { PRODUCT } from "../models/productModel.js";

export const addToCart = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const userId = req.user.id; // Corrected the way userId is accessed
    const { productId } = req.params;

    // Fetch product details from Product model
    const product = await PRODUCT.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const price = product.price;

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId, products: [] });
    }

    // Check if the product already exists in the cart
    const existingProduct = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (existingProduct) {
      // Update quantity of the existing product
      existingProduct.quantity = quantity;
    } else {
      // Add the new product to the cart
      cart.products.push({ productId, quantity, price });
    }

    // Save the updated cart
    const addedItems = await cart.save();

    res
      .status(200)
      .json({ message: "Product added to cart", data: addedItems });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const getAllItem = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.find({ userId: userId }).populate(
      "products.productId"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "cart items fetched", data: cart });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const deleteItem = async (req, res, next) => {
  try {
    const userId = req.user.id; // Assumes `userId` is extracted from the authenticated user's session or token
    const { productId } = req.body; // Extracting `productId` from the request body

    // Find the user's cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Check if the product exists in the cart
    const productIndex = cart.products.findIndex(
      (product) => product.productId.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the product from the cart
    cart.products.splice(productIndex, 1);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};


export const editCartQuantity = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Find the cart containing the product
    const cart = await Cart.findOne({ "products.productId": productId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Update the quantity of the specified product
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    product.quantity = quantity;

    // Recalculate totalPrice
    cart.totalPrice = cart.products.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Quantity updated successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
