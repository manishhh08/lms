import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  pubReviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    //for admin
    setReviews: (state, actions) => {
      state.reviews = actions.payload;
    },
    //for public
    setPubReviews: (state, actions) => {
      state.pubReviews = actions.payload;
    },
  },
});

const { reducer, actions } = reviewSlice;

export const { setReviews, setPubReviews } = actions;
export default reducer;
