// import { RootState, AppDispatch } from "..";
import { post, get } from "../../client/client";
// import { loginForm } from "../../pages/login/Login";
// import { RootState, AppDispatch } from "..";
// import { useAppSelector } from "../hooks/hooks";
import { history } from "../../utilities/routerFns";
import { setStatus, setUser } from "../slices/authSlice";
import { setProducts } from "../slices/productSlice";

export const login = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("login", currentState.authReducer.form)
    .then(async (res) => {
      if (res.status === 200 || res.status === 201) {
        await dispatch(setStatus(true));
        history.navigate("/");
        await dispatch(setUser(res.data));
      }
    })
    .catch((err) => console.log(err));
};
export const signUp = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("signup", currentState.authReducer.signUpForm)
    .then(async (res) => {
      console.log(res);
      const responseData = res;
      await dispatch(setStatus(true));
      if (res.status === 201 || res.status === 200) {
        history.navigate(`/verify/${res.userEmail}`);
        // history.navigate("/");
        return;
      }
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
      localStorage.removeItem("user");
      history.navigate(`/`);
      // Dispatch an action with the todos we received
    })
    .catch((err) => console.log(err));
};
export const addToCart = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  await post("add-to-cart", currentState.cartReducer.cartItems)
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
export const getProducts = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  // const productState = getState().productReducer;
  // console.log(productState);
  await get("get-products")
    .then((res) => {
      console.log(res);
      const responseData = res;
      dispatch(setProducts(res.product));
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
