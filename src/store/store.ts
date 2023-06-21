import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import coreReducer from "./reducers/coreReducer";

export default configureStore({
  reducer: {
    coreReducer: coreReducer,
    userReducer: userReducer,
  },
});
