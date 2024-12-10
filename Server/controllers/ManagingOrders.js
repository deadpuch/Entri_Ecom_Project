import { Order } from "../models/order.js";

// Get All Orders
export const getAllOrders = async (req, res) => {
  try {
    const { status, userId } = req.query;

    const query = {};
    if (status) query.orderStatus = status;
    if (userId) query.user = userId;

    const orders = await Order.find(query)
      .populate("user", "name email")
      .populate("products", "name price thumbnail")
      .populate("shippingAddress");

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch orders", error: error.message });
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
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update order", error: error.message });
  }
};
