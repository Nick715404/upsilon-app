import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../api/products";

export const createdProductsSlice = createSlice({
  name: 'createdProducts',
  initialState: {
    products: [],
    status: '',
    error: null as any
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state, _) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
})

export default createdProductsSlice.reducer;