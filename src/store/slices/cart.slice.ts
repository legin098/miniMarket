import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../data/info";

export interface IProductCart extends IProduct {
  quantity: number;
}

const initialState: IProductCart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existProductIndex >= 0) {
        state[existProductIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    subtractProduct: (state, action) => {
      const existProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existProductIndex >= 0) {
        state[existProductIndex].quantity -= 1;
        if (state[existProductIndex].quantity === 0) {
          state.splice(existProductIndex, 1);
        }
      }
    }
  },
});

export const { addProduct, subtractProduct } = cartSlice.actions;

export default cartSlice.reducer;
