import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProductState {
  products: Array<any>;
  tag: any;
  sponsoredProducts: Array<any>;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  tag: {},
  sponsoredProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    setProductTag(state, action: PayloadAction<any>) {
      state.tag = action.payload;
    },
    setSponsoredProducts: (state, action: PayloadAction<any>) => {
      state.sponsoredProducts = action.payload;
      // console.log(state.sponsoredProducts);
    },
  },
});

export const { setProducts, setSponsoredProducts, setProductTag } =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default productSlice.reducer;
