import { json } from "express";
import { ADDRESS } from "../models/address.js";

export const addAddress = async (req, res, next) => {
  try {
   

    const {
      Address_line_1,
      Address_line_2,
      City,
      State,
      Country,
      Zip,
      Mobile,
      user_data,
    } = req.body;
    if (!Address_line_1 || !City || !State || !Country || !Zip || !Mobile) {
      return res.status(400).json({ message: "all field required" });
    }

    const newAddress = new ADDRESS({
      Address_line_1,
      Address_line_2,
      City,
      State,
      Country,
      Zip,
      Mobile,
      user_data: req.user.id,
    });

    await newAddress.save();
    res.json({ message: "address added" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "address not fetched" });
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
    const {
      Address_line_1,
      Address_line_2,
      City,
      State,
      Country,
      Zip,
      Mobile,
    } = req.body;
    await ADDRESS.updateOne(
      {user_data:userId},
      {
        $set: {
          Address_line_1: Address_line_1,
          Address_line_2: Address_line_2,
          City: City,
          State: State,
          Country: Country,
          Zip: Zip,
          Mobile: Mobile,
        },
      }
    );
  } catch (error) {
    res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
  }
};


export const deleteAddress = async (req, res, next) => {
  try {
    const userId = req.user.id;

    await ADDRESS.deleteOne({user_data:userId})
    
  } catch (error) {
    res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
  }
};
