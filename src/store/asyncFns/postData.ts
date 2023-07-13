// import { RootState, AppDispatch } from "..";
import { post } from "../../client/client";
// import { loginForm } from "../../pages/login/Login";
// import { RootState, AppDispatch } from "..";
import { history } from "../../utilities/routerFns";

export const login = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("login", currentState.authReducer.form)
    .then((res) => {
      console.log(res);
      const responseData = res;
      history.navigate("/");
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
export const signUp = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("signup", currentState.authReducer.signUpForm)
    .then((res) => {
      console.log(res);
      const responseData = res;
      history.navigate(`/verify/${res.userEmail}`);
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
export const verifyOtp = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  const otpObj = {
    email: currentState.authReducer.email,
    otp: currentState.authReducer.otp,
  };
  await post("send-otp", otpObj)
    .then((res) => {
      console.log(res);
      const responseData = res;
      history.navigate("/account/login");
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
export const logout = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("logout", currentState.authReducer.form)
    .then((res) => {
      console.log(res);
      const responseData = res;
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
