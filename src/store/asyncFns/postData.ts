// import { RootState, AppDispatch } from "..";
import { post, get } from "../../client/client";
// import { loginForm } from "../../pages/login/Login";
// import { RootState, AppDispatch } from "..";
import { history } from "../../utilities/routerFns";
import { setStatus, setUser } from "../slices/authSlice";
import CryptoJS from "crypto-js";
import {
  setProducts,
  setSponsoredProducts,
  setSingleProduct,
} from "../slices/productSlice";
import { setUser as setUserSliceUser } from "../slices/userSlice";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  // console.log(user);
  if (user) {
    const bytes = CryptoJS.AES.decrypt(user, process.env.REACT_APP_ENCRYPT_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (decryptedData) {
      return decryptedData;
      // console.log(decryptedData);
    }
  }
};

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
      // console.log(res);
      const responseData = res;
      await dispatch(setStatus(true));
      if (res.status === 201 || res.status === 200) {
        history.navigate(`/account/login`);
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
      // console.log(res);
      localStorage.clear();
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
      dispatch(setProducts(res.data.product));
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // Check the updated store state after dispatching
      // const allTodos = getState().todos;
      // console.log("Number of todos after loading: ", allTodos.length);
    })
    .catch((err) => console.log(err));
};
export const getReservedProducts = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const tag = getState().productReducer.tag;
  // console.log(tag);
  await get(`get-reserved-products/${tag}`)
    .then(async (res) => {
      console.log(res);
      await dispatch(setSponsoredProducts(res.data.sponsoredProducts));
      // const pro = getState().productReducer.sponsoredProducts;
      // console.log(pro);
      // Dispatch an action with the todos we received
    })
    .catch((err) => console.log(err));
};
export const getSingleProducts = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const sku = getState().productReducer.singleProductSku;
  // console.log(sku);
  await get(`get-product/${sku}`)
    .then(async (res) => {
      console.log(res);
      await dispatch(setSingleProduct(res.data.product));
      // const pro = getState().productReducer.sponsoredProducts;
      // console.log(pro);
      // Dispatch an action with the todos we received
    })
    .catch((err) => console.log(err));
};
export const getUser = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const user = getUserFromLocalStorage();
  // console.log(sku);
  await get(`user/?email_address=${user.data.email}`)
    .then(async (res) => {
      // console.log(res, "from getUser");
      await dispatch(setUserSliceUser(res.data.user));
      // const pro = getState().productReducer.sponsoredProducts;
      // console.log(pro);
      // Dispatch an action with the todos we received
    })
    .catch((err) => console.log(err, "from getUser"));
};
