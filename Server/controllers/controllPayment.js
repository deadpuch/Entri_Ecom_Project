import Stripe from "stripe";
import { Order } from "../models/order.js";
import { ADDRESS } from "../models/address.js";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_API_KEY);
const client_domain = process.env.CLIENT_DOMAIN;

// Create Payment Session
export const controllPayment = async (req, res, next) => {
  try {
    const { products, userId } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products are required" });
    }

    // Find Shipping Address by User ID
    const address = await ADDRESS.findOne({ user: userId });
    if (!address) {
      return res
        .status(404)
        .json({ message: "Shipping address not found for this user" });
    }
    const shippingAddressId = address._id;

    // Format Products Array
    const formattedProducts = products.map((product) => {

  
      return {
        productId: product?.productId?._id,
        productName: product?.productId?.productName,
        quantity: product?.quantity,
        price: product?.price,
        totalPrice: product?.price * product?.quantity,
        thumbnail: product?.productId?.thumbnail || "", // Optional thumbnail
      };
    });

   




    // Create Stripe Line Items
    const lineItems = formattedProducts.map((product) => {
      // Log the product object
      
      console.log(product);
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product?.productName,
            images: [product?.thumbnail],
          },
          unit_amount: Math.round(product.price * 100), // Convert to smallest currency unit
        },
        quantity: product.quantity,
      };
    });
    
    console.log("Formatted Line Items:", lineItems)
    // Create Stripe Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${client_domain}/user/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${client_domain}/user/payment/cancel`,
    });

    // Temporarily Save Order in DB with "Pending" status
    const order = new Order({
      user: userId,
      products: formattedProducts,
      shippingAddress: shippingAddressId,
      paymentDetails: {
        stripeSessionId: session.id,
      },
      paymentStatus: "Pending",
    });
    await order.save();

    res.json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: error.message || "Internal server error-payment failed",
    });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { sessionId } = req.query;

    // Retrieve the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      // Update the order's payment status
      const order = await Order.findOneAndUpdate(
        { "paymentDetails.stripeSessionId": sessionId },
        {
          paymentStatus: "Completed",
          "paymentDetails.amountPaid": session.amount_total / 100,
          "paymentDetails.paymentDate": new Date(),
        },
        { new: true }
      );

      if (!order) {
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }

      // Clear the user's cart
      await Cart.findOneAndUpdate(
        { user: order.user }, // Match the cart by user
        { items: [] }, // Clear all items in the cart
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Payment confirmed and cart cleared",
        order,
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Payment not completed" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

