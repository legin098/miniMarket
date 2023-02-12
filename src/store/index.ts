import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import products from "./slices/products.slice";

const store =  configureStore({
  reducer: {
    cart,
    products,
  },
});

export default store

// Dispatch
export type AppDispatch = typeof store.dispatch;
// Selector
export type RootState = ReturnType<typeof store.getState>;
