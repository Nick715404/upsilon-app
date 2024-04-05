import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/products";
import { ICreatedProduct, IProduct } from "../interfaces/interfaces";

interface ProductsState {
  products: IProduct[] | ICreatedProduct[];
  createdProducts: ICreatedProduct[];
  status: string;
  error: any;
  sortedProducts: ICreatedProduct[]
}

const initialState: ProductsState = {
  products: [],
  createdProducts: [],
  sortedProducts: [],
  status: '',
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
      state.createdProducts = state.createdProducts.filter((product) => product.id !== action.payload.id);
    },
    addProduct(state, action: PayloadAction<ICreatedProduct[]>) {
      state.products.push(...action.payload);
      state.createdProducts.push(...action.payload);
      state.sortedProducts.push(...action.payload);
    },
    sortPublished(state, action) {
      if (action.payload === false) {
        state.sortedProducts = state.createdProducts;
        return;
      }
      let newArray = [...state.createdProducts];
      newArray = newArray.filter(item => item.published === action.payload);
      state.sortedProducts = newArray;
    },
    addEditedProduct(state, action: PayloadAction<ICreatedProduct>) {
      const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id);

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = action.payload;
      } else {
        state.products.push(action.payload);
      }
      const existingCreatedProductIndex = state.createdProducts.findIndex(product => product.id === action.payload.id);

      if (existingCreatedProductIndex !== -1) {
        state.createdProducts[existingCreatedProductIndex] = action.payload;
      } else {
        state.createdProducts.push(action.payload);
      }
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
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

export const { removeProduct, addProduct, sortPublished, addEditedProduct } = productSlice.actions;

export default productSlice.reducer;
