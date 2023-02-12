import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/info";
import { IProduct } from '../../data/info';

interface IProductsGLobal {
  products: IProduct[];
  productView: IProduct
}

const initialState:IProductsGLobal = {
  products,
  productView: {
    id: 0,
    image: "",
    title: "",
    description:"",
    price: 0,
  }
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductView: (state, action) => {
      state.productView = action.payload
    },
  },
});

export const {setProductView} = productsSlice.actions;

export default productsSlice.reducer;
