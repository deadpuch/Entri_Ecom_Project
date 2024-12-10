import mongoose from "mongoose";

const orderSchema =  mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          
        },
        productName: {
          type: String,
          
        },
        quantity: {
          type: Number,
          
        },
        price: {
          type: Number,
          
        },
        totalPrice: {
          type: Number,
          
        },
        thumbnail: {
          type: String,
          
        },
      },
    ],
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Stripe", "Cash", "Card", "Other"],
      default: "Stripe",
    },
    paymentDetails: {
      stripeSessionId: { type: String },
      stripePaymentIntentId: { type: String },
      amountPaid: { type: Number },
      paymentDate: { type: Date },
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
