import { Wishlist } from "../models/wishlist.js";

export const addProductToWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      // Create a new wishlist if it doesn't exist
      wishlist = new Wishlist({ user: userId, products: [productId] });
    } else {
      // Add product if it's not already in the wishlist
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      } else {
        return res.status(400).json({ message: "Product already in wishlist" });
      }
    }

    await wishlist.save();
    res.status(200).json({ message: "Product added to wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeProductFromWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    // Find the user's wishlist
    const wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    // Remove the product from the products array
    wishlist.products = wishlist.products.filter(
      (product) => product.toString() !== productId
    );

    await wishlist.save();

    res.status(200).json({
      message: "Product removed from wishlist",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    ); // Use populate if products are references to another model

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res
      .status(200)
      .json({ message: "Wishlist retrieved successfully", wishlist });
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};
