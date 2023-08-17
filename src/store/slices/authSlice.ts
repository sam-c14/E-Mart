import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginForm } from "../../pages/login/Login";
import { signUpForm } from "../../pages/signup/SignUp";
import CryptoJS from "crypto-js";

// Define a type for the slice state
export interface authState {
  isUserLoggedIn: boolean;
  token: string | null;
  form: loginForm;
  signUpForm: signUpForm;
  otp: string;
  email: string;
  status: boolean | null;
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
  otp: "",
  email: "",
  status: null,
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
    setOtp: (state, action: PayloadAction<any>) => {
      state.otp = action.payload;
    },
    setOtpEmail: (state, action: PayloadAction<any>) => {
      state.email = action.payload;
    },
    setStatus: (state, action: PayloadAction<any>) => {
      state.status = action.payload;
      console.log(state.status);
    },
    setUser: (state, action: PayloadAction<any>) => {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(action.payload),
        process.env.REACT_APP_ENCRYPT_KEY
      ).toString();
      localStorage.setItem("user", encryptedData);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    refreshToken: (state, action: PayloadAction<string>) => {
      //   state.value += action.payload;
    },
  },
});

export const {
  refreshToken,
  setUser,
  setForm,
  setSignUpForm,
  setOtp,
  setOtpEmail,
  setStatus,
} = authSlice.actions;
export const { status } = authSlice.getInitialState();

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
