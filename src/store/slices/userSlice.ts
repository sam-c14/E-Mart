import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type T = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface userState {
  user: any;
  orders: Array<any>;
  userForm: T;
  userFormSubmissionStatus: boolean;
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
    setUserForm(state, action: PayloadAction<T>) {
      state.userForm = action.payload;
    },
    setUserFormSubmissionStatus(state, action: PayloadAction<boolean>) {
      state.userFormSubmissionStatus = action.payload;
    },
  },
});

export const { setUser, setUserForm, setUserFormSubmissionStatus } =
  userSlice.actions;

export default userSlice.reducer;
