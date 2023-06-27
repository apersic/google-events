import { createSlice } from "@reduxjs/toolkit";
import { EventReducerState, GroupByTypes } from "../types";

const initialState: EventReducerState = {
  events: null,
  groupBy: GroupByTypes.DAY,
  daysLimit: 7,
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
    setGroupBy: (state, action) => {
      return {
        ...state,
        groupBy: action.payload,
      };
    },
    setDaysLimit: (state, action) => {
      return {
        ...state,
        daysLimit: action.payload,
      };
    },
  },
});

export const { setEvents, setGroupBy, setDaysLimit } = eventReducer.actions;

export default eventReducer.reducer;
