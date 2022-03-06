import { configureStore } from "@reduxjs/toolkit";
import jsonPlaceHolderAPI from "./api/jsonPlaceHolderAPI";

const store = configureStore({
  reducer: {
    [jsonPlaceHolderAPI.reducerPath]: jsonPlaceHolderAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceHolderAPI.middleware),
});

export default store;
