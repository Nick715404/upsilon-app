import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchProductsParams {
  limit: number;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit }: FetchProductsParams) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }
);