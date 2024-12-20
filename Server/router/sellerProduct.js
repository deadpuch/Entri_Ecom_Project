import express from "express";
import { sellerAuth } from "../middleware/sellerAuth.js";
import {deleteProducts, individualProducts, sellerAddProduct, sellerEditProduct, sellerProducts} from "../controllers/sellerProduct.js";
import { upload } from "../middleware/multer.js";
import { getAllOrders, getSellerOrders, updateOrder } from "../controllers/ManagingOrders.js";
import { arrayImgDelete } from "../controllers/productController.js";


const fileUpload = upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "itemImage", maxCount: 5 },
  ]);



const router = express.Router();

router.post("/addproduct", sellerAuth, fileUpload, sellerAddProduct)

router.get("/all_product", sellerAuth, sellerProducts)
router.get("/single_product/:productId", sellerAuth, individualProducts)


router.put("/edit_product/:productId", sellerAuth,fileUpload,sellerEditProduct)
router.delete("/delete_product/:productId", sellerAuth, deleteProducts)


router.get("/seller/orders",sellerAuth,getSellerOrders)
router.delete("/product-arrayimg-delete/:productId",sellerAuth, arrayImgDelete);
// router.put("/admin/orders/:id",sellerAuth, updateOrder);


export { router as sellerProduct};


