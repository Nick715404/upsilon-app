import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './products.slice';
import limiterReducer from './limiter.slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    limiter: limiterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
