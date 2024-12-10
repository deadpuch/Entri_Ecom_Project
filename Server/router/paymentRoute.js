import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { getAllOrders } from "../controllers/ManagingOrders.js";
import { confirmPayment, controllPayment } from "../controllers/controllPayment.js";

const router = express.Router();

router.post("/create-checkout-session",userAuth,controllPayment)
router.get("/confirm",userAuth,confirmPayment)

router.get("/user/orders",userAuth,getAllOrders)




export { router as paymentRoutes };


