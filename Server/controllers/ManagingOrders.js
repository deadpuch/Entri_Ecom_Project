import { Order } from "../models/order.js";

// Get All Orders
export const getAdminOrders = async (req, res) => {
  try {
    const adminId = req.admin.id;

    const orders = await Order.find({ admin: adminId })
      .populate("user", "name email")
      .populate("products", "name price thumbnail")
      .populate("shippingAddress");

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};
export const getSellerOrders = async (req, res) => {
  try {
    const salesId = req.sales.id;

    const orders = await Order.find({ seller: salesId })
      .populate("user", "name email")
      .populate("products", "name price thumbnail")
      .populate("shippingAddress");

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};
export const getAllOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ user: userId })
      .populate("user", "name email")
      .populate("products", "name price thumbnail")
      .populate("shippingAddress");

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

// Update Order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update order",
      error: error.message,
    });
  }
};
