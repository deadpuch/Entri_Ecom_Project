import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveProductData: (state, action) => {
      const existingProductIndex = state.findIndex(
        (item) => item.productData._id === action.payload.productData._id
      );

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { saveProductData } = cartSlice.actions;

export default cartSlice.reducer;
