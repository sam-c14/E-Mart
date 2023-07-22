import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type T = {
  id: Number;
  title: String;
  price: Number;
};

export interface cartState {
  cartItems: Array<T>;
  totalQuantity: number;
  isEmpty: Boolean;
}

const initialState: cartState = {
  cartItems: [],
  totalQuantity: 0,
  isEmpty: true,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      state.cartItems.push(action.payload);
      state.isEmpty = false;
    },
    removeFromCart(state, action: PayloadAction<any>) {},
    clearCart(state) {
      state.isEmpty = false;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
