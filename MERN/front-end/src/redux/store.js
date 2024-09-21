import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        userApi.middleware,
        authApi.middleware,
    ]),
});