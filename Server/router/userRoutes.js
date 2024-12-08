import express from "express";
import {
  checkUser,
  userDeleteAccount,
  userLogin,
  userLogout,
  userProfile,
  userProfileUpdate,
  userResetPassword,
  userSignup,
} from "../controllers/userController.js";
import { userAuth } from "../middleware/userAuth.js";
import { getProduct } from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";
import { userReview } from "./userReview.js"
import { addAddress, deleteAddress, editAddress, getAddress} from "../controllers/addressController.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/profile", userAuth, userProfile);
router.put("/logout", userAuth, userLogout);

router.put("/reset-password", userResetPassword);
router.put("/profile-update", userAuth, upload.single("profileImg"), userProfileUpdate);
router.delete("/delete-account", userAuth, userDeleteAccount);

router.post("/add-address",userAuth,addAddress)
router.get("/get-address",userAuth,getAddress)
router.put("/edit-address",userAuth,editAddress)
router.delete("/delete-address",userAuth,deleteAddress)

router.get("/check-user", userAuth, checkUser);

router.get("/allProduct", userAuth, getProduct);

router.use("/review",userReview);


export { router as userRoutes };


