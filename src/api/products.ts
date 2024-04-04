import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchProductsParams {
  limit: number | null;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit }: FetchProductsParams, { rejectWithValue }) => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const reqUrl = `${url}?limit=${limit}`;

      const res = await fetch(limit ? reqUrl : url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) throw new Error('Server error')

      const data = await res.json();

      return data;
    }
    catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const fetchSingleProducts = async (id: string | undefined) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) throw new Error('Server error')

    const data = await res.json();

    return data;
  }
  catch (error) {
    console.log(error);
  }
};