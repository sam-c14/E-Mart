// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  authReducer,
  userReducer,
  // Add other reducers as needed
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
