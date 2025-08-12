import { createSlice } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser } = actions;
export default reducer;
