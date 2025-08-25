import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, actions) => {
      state.book = actions.payload;
    },
    setSelectedBook: (state, actions) => {
      state.SelectedBook = actions.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBook, setSelectedBook } = actions;
export default reducer;
