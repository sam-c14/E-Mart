import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type T = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type CheckoutT = {
  first_name: string;
  last_name: string;
  phone_number: string;
  street_address: string;
  state: string;
  lga: string;
};

export interface userState {
  user: any;
  orders: Array<any>;
  userForm: T;
  userFormSubmissionStatus: boolean;
  userCheckoutForm: CheckoutT;
}

const initialState: userState = {
  user: {},
  orders: [],
  userForm: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  userFormSubmissionStatus: false,
  userCheckoutForm: {
    first_name: "",
    last_name: "",
    phone_number: "",
    street_address: "",
    state: "",
    lga: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    setUserForm(state, action: PayloadAction<T>) {
      state.userForm = action.payload;
    },
    setUserFormSubmissionStatus(state, action: PayloadAction<boolean>) {
      state.userFormSubmissionStatus = action.payload;
    },
    setUserCheckoutForm(state, action: PayloadAction<CheckoutT>) {
      state.userCheckoutForm = action.payload;
    },
    clearStore(state, action: PayloadAction<boolean>) {
      state = initialState;
    },
  },
});

export const {
  setUser,
  setUserForm,
  setUserFormSubmissionStatus,
  clearStore,
  setUserCheckoutForm,
} = userSlice.actions;

export default userSlice.reducer;
