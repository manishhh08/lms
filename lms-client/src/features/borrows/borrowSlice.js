import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrows: [],
};

const borrowSlice = createSlice({
  name: "borrows",
  initialState,
  reducers: {
    setBorrows: (state, actions) => {
      state.borrows = actions.payload;
    },
  },
});

const { reducer, actions } = borrowSlice;
export const { setBorrows } = actions;
export default reducer;
