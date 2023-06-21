import { createSlice } from "@reduxjs/toolkit";
import { CoreReducerState } from "../types";

const initialState: CoreReducerState = {
  isSubmenuOpened: false,
};

export const coreReducer = createSlice({
  name: "coreReducer",
  initialState,
  reducers: {
    setIsSubmenuOpened: (state, action) => {
      return {
        ...state,
        isSubmenuOpened: action.payload,
      };
    },
  },
});

export const { setIsSubmenuOpened } = coreReducer.actions;

export default coreReducer.reducer;
