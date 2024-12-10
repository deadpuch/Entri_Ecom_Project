import express from "express"
import { userAuth } from "../middleware/userAuth.js"
import { addToCart, deleteItem, editCartQuantity, getAllItem } from "../controllers/cartController.js"
const router=express.Router()


router.post("/addItems/:productId",userAuth,addToCart)

router.put("/edit-quantity",userAuth,editCartQuantity)

router.get("/showItems",userAuth,getAllItem)

router.delete("/deleteItems",userAuth,deleteItem)


export {router as cartlist}