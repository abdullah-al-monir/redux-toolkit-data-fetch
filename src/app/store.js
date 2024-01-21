import postReducer from "./features/posts/postSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
