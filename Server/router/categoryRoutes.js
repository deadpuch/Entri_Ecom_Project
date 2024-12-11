import express from "express";

import {
  addToCart,
  deleteItem,
  editCartQuantity,
  getAllItem,
} from "../controllers/cartController.js";
import { sellerAuth } from "../middleware/sellerAuth.js";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/cateogryController.js";
const router = express.Router();

router.post("/add-category", sellerAuth, addCategory);

router.put("/edit-category", sellerAuth, updateCategory);

router.get("/show-category", sellerAuth, getCategories);

router.delete("/delete-category", sellerAuth, deleteCategory);

export { router as categoryRoutes };
