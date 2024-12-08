import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { controllPayment } from "../controllers/controllPayment.js";
const router = express.Router();

router.post("/create-checkout-session",userAuth,controllPayment)




export { router as paymentRoutes };


