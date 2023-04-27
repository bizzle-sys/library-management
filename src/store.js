import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Pages/Signup-Signin/userSlice";
import bookReducer from "./Pages/book/BookSlice";
import systemReducer from "./system/SystemSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    system: systemReducer,
  },
});
