import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import coreReducer from "./reducers/coreReducer";
import eventReducer from "./reducers/eventReducer";

export default configureStore({
  reducer: {
    coreReducer: coreReducer,
    userReducer: userReducer,
    eventReducer: eventReducer,
  },
});
