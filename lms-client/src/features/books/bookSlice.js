import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
  selectedBook: [],
  pubBook: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, actions) => {
      state.book = actions.payload;
    },
    setSelectedBook: (state, actions) => {
      state.selectedBook = actions.payload;
    },
    setPubBook: (state, actions) => {
      state.pubBook = actions.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBook, setSelectedBook, setPubBook } = actions;
export default reducer;
