import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { loginForm } from "../../pages/login/Login";
import { signUpForm } from "../../pages/signup/SignUp";
// import { TypedThunk } from "../index";

// Define a type for the slice state
export interface authState {
  isUserLoggedIn: boolean;
  token: string | null;
  form: loginForm;
  signUpForm: signUpForm;
}

// Define the initial state using that type
const initialState: authState = {
  isUserLoggedIn: false,
  token: null,
  form: {
    email: "",
    password: "",
  },
  signUpForm: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<any>) => {
      state.form = action.payload;
    },
    setSignUpForm: (state, action: PayloadAction<any>) => {
      state.signUpForm = action.payload;
    },
    setUser: (state, action: PayloadAction<"user">) => {
      localStorage.setItem("user", action.payload);
      console.log(action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    refreshToken: (state, action: PayloadAction<string>) => {
      //   state.value += action.payload;
    },
  },
});

export const { refreshToken, setUser, setForm, setSignUpForm } =
  authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount: any = (state: RootState) => state.counterReducer;

export default authSlice.reducer;
