import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICreatedProduct } from "../interfaces/interfaces";
import { removeProduct } from "../store/products.slice";

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

interface createProduct {
  product: ICreatedProduct
}

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async ({ product }: createProduct, { rejectWithValue, dispatch }) => {
    try {

      console.log(product);

      const res = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            title: product.title,
            price: product.price,
            description: product.description,
            image: 'https://i.pravatar.cc',
            category: product.published ? 'published' : 'notPublished'
          }
        )
      });

      if (!res.ok) throw new Error('Server error')

      const data = await res.json();
      console.log(data);
      return data;
    }
    catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

interface IDeleteProduct {
  id: number
}

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async ({ id }: IDeleteProduct, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error('Cant delete product')

      dispatch(removeProduct({ id }));
      return;
    }
    catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)