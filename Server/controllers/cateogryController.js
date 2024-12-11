import { Category } from "../models/cateogry.js";


// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("category.product");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

// Add a new category
export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const newCategory = new Category({ category });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error adding category", error });
  }
};

// Update a category
export const updateCategory = async (req, res) => {
  const { id } = req.params; // The ID of the category document
  const { category } = req.body; // The updated category array

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    ).populate("category.product");

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

// Delete a category (hard delete)
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};

