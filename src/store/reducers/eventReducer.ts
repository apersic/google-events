import { createSlice } from "@reduxjs/toolkit";
import { EventReducerState } from "../types";

const initialState: EventReducerState = {
  events: null,
};

export const eventReducer = createSlice({
  name: "eventReducer",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      return {
        ...state,
        events: action.payload,
      };
    },
  },
});

export const { setEvents } = eventReducer.actions;

export default eventReducer.reducer;
