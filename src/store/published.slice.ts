import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  sorted: boolean
}

const initialState: IInitialState = {
  sorted: false
}

export const publishedSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    changeStatus(state, action: PayloadAction<boolean>) {
      state.sorted = !action.payload
    }
  }
});

export const { changeStatus } = publishedSlice.actions;
export default publishedSlice.reducer;