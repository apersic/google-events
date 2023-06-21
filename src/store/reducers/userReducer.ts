import { createSlice } from "@reduxjs/toolkit";
import { UserReducerState } from "../types";

const initialState: UserReducerState = {
  accessToken: null,
  user: null,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setAccessToken: (state, action) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
  },
});

export const { setUser, setAccessToken } = userReducer.actions;

export default userReducer.reducer;
