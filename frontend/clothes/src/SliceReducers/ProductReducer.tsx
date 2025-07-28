import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../helps/InterfacesType";

interface initialStateType {
  products: ProductType[];
}

const initialState: initialStateType = {
  products: [],
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, setProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
