import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "../store/slices/authSlice";
import asyncFunctionMiddleware from "./middleware/asyncFn";
// import { authState } from "../store/slices/authSlice";
import { Action, ThunkAction } from "@reduxjs/toolkit";

// const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const store = configureStore({
  reducer: {
    productReducer,
    authReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asyncFunctionMiddleware),
});
export default store;

export type TypedDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof authReducer>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;
