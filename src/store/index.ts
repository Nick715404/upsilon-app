import productsReducer from './products.slice';
import limiterReducer from './limiter.slice';
import publishedReducer from './published.slice';

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    limiter: limiterReducer,
    switcher: publishedReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
