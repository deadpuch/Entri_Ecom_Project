import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const quantity = createSlice({
  name: "qunatity",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        if (state.value > 1) { 
            state.value -= 1;
          }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount } = quantity.actions;
export default quantity.reducer;
