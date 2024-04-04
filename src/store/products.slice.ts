import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/products";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'null',
    error: ''
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loding';
        state.error = 'null';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Обработка действия "rejected"
      });
  }
});

export default productSlice.reducer;