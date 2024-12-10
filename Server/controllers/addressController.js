import { json } from "express";
import { ADDRESS } from "../models/address.js";

export const addAddress = async (req, res, next) => {
  try {
    const { Address, City, State, Country, Zip, Mobile, Name } = req.body;

    // Check if all fields are provided
    if (!Address || !City || !State || !Country || !Zip || !Mobile || !Name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already has an address
    const existingAddress = await ADDRESS.findOne({ user_data: req.user.id });

    if (existingAddress) {
      // Compare the existing address with the new address
      const isSameAddress =
        existingAddress.Address === Address &&
        existingAddress.City === City &&
        existingAddress.State === State &&
        existingAddress.Country === Country &&
        existingAddress.Zip === Zip &&
        existingAddress.Mobile === Mobile &&
        existingAddress.Name === Name;

      if (isSameAddress) {
        // If the address matches, allow the operation to proceed
        return res.status(200).json({
          message: "Address already exists and matches the provided data",
          address: existingAddress,
        });
      } else {
        // If the address differs, notify the user or update it
        return res.status(400).json({
          message: "User already has an address, and it differs from the provided one",
        });
      }
    }

    // Create a new address for the user
    const newAddress = new ADDRESS({
      Address,
      City,
      State,
      Country,
      Zip,
      Mobile,
      user_data: req.user.id,
      Name,
    });

    await newAddress.save();
    res.json({ message: "Address added successfully", address: newAddress });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add address" });
  }
};


export const getAddress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const fetchAddress = await ADDRESS.find({ user_data: userId });

    res.json({ message: "address fetched success", data: fetchAddress });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const editAddress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { Address, City, State, Country, Zip, Mobile, Name } = req.body;

    const result = await ADDRESS.updateOne(
      { user_data: userId },
      {
        $set: {
          Address: Address,
          City: City,
          State: State,
          Country: Country,
          Zip: Zip,
          Mobile: Mobile,
          user_data: req.user.id,
          Name: Name,
        },
      }
    );

    // Check if the update was successful
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json({ message: "Address updated successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const deleteAddress = async (req, res, next) => {
  try {
    const userId = req.user.id;

    await ADDRESS.deleteOne({ user_data: userId });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
