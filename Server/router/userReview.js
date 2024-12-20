import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { allReview, createReview, deleteReview, productReview} from "../controllers/reviewController.js";

const router=express.Router();

// router.put("/edit_review/:id",userAuth,editReview)

router.post("/create_review/:productId",userAuth,createReview)

router.get("/allreview",userAuth,allReview)
router.get("/product-review/:productId",productReview)

router.delete("/delete_review/:reviewId",userAuth,deleteReview)




export{router as userReview }