import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type T = {
  id: String;
  title: String;
  price: Number;
  quantity: Number;
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
      state.totalQuantity = state.cartItems.length;
    },
    removeFromCart(state, action: PayloadAction<any>) {},
    clearCart(state) {
      state.isEmpty = false;
    },
    incProductQuantity(state, action: PayloadAction<any>) {
      console.log(action.payload);
      const product: any = state.cartItems.find(
        (item) => item.id === action.payload
      );
      console.log(state.cartItems);
      product.quantity && product.quantity++;
    },
    decProductQuantity(state, action: PayloadAction<any>) {
      const product: any = state.cartItems.find(
        (item) => item.id === action.payload
      );
      product.quantity && product.quantity--;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decProductQuantity,
  incProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
