import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type T = {
  sku: String;
  src: string;
  title: String;
  price: Number;
  quantity: Number;
};
export type productT = {
  sku: String;
  src: String;
  title: String;
  price: Number;
  quantity: Number;
};
export type itemT = {
  id: String;
  status: String;
  price: Number;
  quantity: number;
  op: String;
  sku: String;
};
export type cartItemType = {
  _id: String;
  status: string;
  products: productT;
};

export interface cartState {
  id: String;
  status: String;
  cartItems: Array<T>;
  addedItem: cartItemType;
  itemQuantityToBeChanged: itemT;
  totalQuantity: number;
  isEmpty: Boolean;
  itemToBeRemoved: any;
}

const initialState: cartState = {
  id: "",
  status: "active",
  cartItems: [],
  addedItem: {
    _id: "",
    status: "",
    products: {
      sku: "",
      src: "",
      title: "",
      price: 0,
      quantity: 0,
    },
  },
  itemQuantityToBeChanged: {
    id: "",
    status: "",
    price: 0,
    quantity: 0,
    op: "",
    sku: "",
  },
  totalQuantity: 0,
  isEmpty: true,
  itemToBeRemoved: {},
};

const setCartIsEmpty = (state: any) => {
  state.isEmpty = true;
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      // const itemIsPresent = state.cartItems.find(
      //   (cartItem) => cartItem.sku === action.payload.id
      // );
      // // console.log(itemIsPresent);
      // !itemIsPresent && state.cartItems.push(action.payload);
      // state.isEmpty = false;
      // state.totalQuantity = state.cartItems.length;
      state.addedItem.products = action.payload;
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const product = state.cartItems.find(
        (item) => item.sku === action.payload
      );
      state.cartItems = state.cartItems.filter((item) => item !== product);
      state.totalQuantity--;
      state.totalQuantity === 0 && setCartIsEmpty(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.isEmpty = false;
    },
    incProductQuantity(state, action: PayloadAction<any>) {
      // console.log(action.payload);
      const product: any = state.cartItems.find(
        (item) => item.sku === action.payload
      );
      // console.log(state.cartItems);
      product.quantity >= 0 && product.quantity++;
    },
    decProductQuantity(state, action: PayloadAction<any>) {
      const product: any = state.cartItems.find(
        (item) => item.sku === action.payload
      );
      product.quantity !== 0 && product.quantity--;
    },
    setItemQuantityToBeChanged(state, action: PayloadAction<itemT>) {
      state.itemQuantityToBeChanged = action.payload;
    },
    setCartDetails(state, action: PayloadAction<any>) {
      state.cartItems = action.payload?.products;
      state.addedItem._id = action.payload?._id;
      state.addedItem.status = action.payload?.status;
      state.id = action.payload?._id;
      state.status = action.payload?.status;
      state.totalQuantity = action.payload?.quantity;
      state.isEmpty = action.payload?.products.length === 0;
    },
    setItemToBeRemoved(state, action: PayloadAction<any>) {
      state.itemToBeRemoved = action.payload;
    },
    clearStore(state, action: PayloadAction<any>) {
      state = initialState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decProductQuantity,
  incProductQuantity,
  setCartDetails,
  setItemToBeRemoved,
  setItemQuantityToBeChanged,
  clearStore,
} = cartSlice.actions;

export default cartSlice.reducer;
