import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { loginForm } from "../../pages/login/Login";
// import { TypedThunk } from "../index";

// Define a type for the slice state
export interface authState {
  isUserLoggedIn: boolean;
  token: string | null;
  form: loginForm;
}

// Define the initial state using that type
const initialState: authState = {
  isUserLoggedIn: false,
  token: null,
  form: {
    email: "",
    password: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginForm>) => {},
    logout: (state, action: PayloadAction<string>) => {},
    setForm: (state, action: PayloadAction<any>) => {
      state.form = action.payload;
    },
    setUser: (state, action: PayloadAction<"user">) => {
      localStorage.setItem("user", action.payload);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    refreshToken: (state, action: PayloadAction<string>) => {
      //   state.value += action.payload;
    },
  },
});

export const { login, logout, refreshToken, setUser, setForm } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counterReducer;

export default counterSlice.reducer;
