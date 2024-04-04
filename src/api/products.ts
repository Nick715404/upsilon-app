import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchProductsParams {
  limit: number | null;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit }: FetchProductsParams) => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const reqUrl = `${url}?limit=${limit}`;

      const res = await fetch(limit ? reqUrl : url, {
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