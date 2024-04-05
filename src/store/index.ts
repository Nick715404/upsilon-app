import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './products.slice';
import limiterReducer from './limiter.slice';
import createdProductsReducer from './createdProducts.slice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    limiter: limiterReducer,
    createdProducts: createdProductsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
