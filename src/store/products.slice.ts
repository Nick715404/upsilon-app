import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/products";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: '',
    error: null as any
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
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
      });
  }
});

export default productSlice.reducer;