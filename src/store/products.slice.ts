import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts } from "../api/products";
import { ICreatedProduct, IProduct } from "../interfaces/interfaces";


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    createdProducts: [],
    status: '',
    error: null as any
  },
  reducers: {
    removeProduct(state, action) {
      state.products = state.products.filter((product: IProduct) => product.id !== action.payload.id);
      state.createdProducts = state.createdProducts.filter((product: ICreatedProduct) => product.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, _) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  }
});

export const { removeProduct } = productSlice.actions;

export default productSlice.reducer;