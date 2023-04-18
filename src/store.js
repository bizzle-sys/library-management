import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Pages/Signup-Signin/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
