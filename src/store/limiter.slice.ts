import { createSlice } from "@reduxjs/toolkit";

export const limiterSlice = createSlice({
  name: 'limit',
  initialState: {
    limit: 8
  },
  reducers: {
    changeLimit(state, action) {
      state.limit = action.payload;
    }
  }
})

export const { changeLimit } = limiterSlice.actions;
export default limiterSlice.reducer;