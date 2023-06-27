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
    setLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

export const { setIsSubmenuOpened, setLanguage } = coreReducer.actions;

export default coreReducer.reducer;
