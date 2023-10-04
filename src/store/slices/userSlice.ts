import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export type T = {
//   id: String;
//   src: string;
//   title: String;
//   price: Number;
//   quantity: Number;
// };

export interface userState {
  user: any;
  orders: Array<any>;
}

const initialState: userState = {
  user: {},
  orders: [],
};

// const setCartIsEmpty = (state: any) => {
//   state.isEmpty = true;
// };

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
