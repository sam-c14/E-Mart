import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "../store/slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import asyncFunctionMiddleware from "./middleware/asyncFn";
import { persistStore } from "redux-persist";
import persistedReducer from "./persist/persistConfig";
import { Action, ThunkAction } from "@reduxjs/toolkit";

// const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(asyncFunctionMiddleware),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };

// export default store;

export type TypedDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof authReducer>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;
