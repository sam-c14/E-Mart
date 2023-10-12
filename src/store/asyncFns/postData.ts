// import { RootState, AppDispatch } from "..";
import { post, get, put } from "../../client/client";
// import { loginForm } from "../../pages/login/Login";
// import { RootState, AppDispatch } from "..";
import { history } from "../../utilities/routerFns";
import { setStatus, setUser, setReturnUrl } from "../slices/authSlice";
import CryptoJS from "crypto-js";
import toast from "react-hot-toast";

import {
  setProducts,
  setSponsoredProducts,
  setSingleProduct,
} from "../slices/productSlice";
import {
  setUser as setUserSliceUser,
  setUserFormSubmissionStatus,
} from "../slices/userSlice";

import { setCartDetails } from "../slices/cartSlice";

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
  // console.log(currentState.authReducer.form);
  await post("login", currentState.authReducer.form)
    .then(async (res) => {
      // console.log(res, "from here");
      if (res.status === 200 || res.status === 201) {
        await dispatch(setStatus(true));
        await getCartDetails(dispatch, getState, res.data);
        history.navigate("/");
        await dispatch(setUser(res.data));
      } else if (res.status === 404) {
        toast.error(
          "There was an error signing in, Kindly check your credentials and try again"
        );
      }
    })
    .catch((err) => {
      // console.log(err);
      toast.error(
        "There was an error signing in, Kindly check your credentials and try again"
      );
    });
};
export const signUp = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  const form = currentState.authReducer.signUpForm;
  await post("signup", form)
    .then(async (res) => {
      // console.log(res);
      const responseData = res;
      await dispatch(setStatus(true));
      if (res.status === 201 || res.status === 200) {
        history.navigate(`/account/login?email=${form.email}`);
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
      document.location.reload();
      history.navigate(`/`);
      // Dispatch an action with the todos we received
    })
    .catch((err) => console.log(err));
};
export const addToCart = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  const returnUrl = currentState.authReducer.returnUrl;
  // console.log(returnUrl, "here");
  await post("add-to-cart", currentState.cartReducer.addedItem)
    .then(async (res) => {
      // console.log(res);
      const responseData = res;
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      toast.success("Item Successfully added to cart");
      if (returnUrl === "/cart/overview")
        setTimeout(() => {
          history.navigate(returnUrl);
          dispatch(setReturnUrl(history.location.pathname));
        }, 3500);
      await getCartDetails(dispatch, getState);
    })
    .catch((err) => {
      // console.log(err);
      toast.error("There was an error adding item to cart");
    });
};
export const changeProductQuantity = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  const cartItem = currentState.cartReducer.itemQuantityToBeChanged;
  // const returnUrl = currentState.authReducer.returnUrl;
  await post("change-prod-quantity", cartItem)
    .then(async (res) => {
      // console.log(res);
      const responseData = res;
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // await dispatch(removeFromCartSlice(cartItem.id));
      toast.success("Item quantity has been successfully updated");
      await getCartDetails(dispatch, getState);
    })
    .catch((err) => {
      console.log(err);
      toast.error("There was an error updating the item quantity");
    });
};
export const removeFromCart = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const currentState = getState();
  const cartItem = currentState.cartReducer.itemToBeRemoved;
  // const returnUrl = currentState.authReducer.returnUrl;
  await post("remove-from-cart", cartItem)
    .then(async (res) => {
      console.log(res);
      const responseData = res;
      // Dispatch an action with the todos we received
      dispatch({ type: "user", payload: responseData });
      // await dispatch(removeFromCartSlice(cartItem.id));
      toast.success("Item Successfully removed from cart");
      await getCartDetails(dispatch, getState);
    })
    .catch((err) => {
      console.log(err);
      toast.error("There was an error removing the item from cart");
    });
};
export const getCartDetails = async (
  dispatch: any,
  getState: any,
  user: any = {}
) => {
  let userId;
  const cartId = getState().cartReducer?.addedItem?._id;
  // console.log(cartId);
  if (!cartId) userId = user.data.id;
  else userId = cartId;

  try {
    await get(`user-cart/?id=${userId}`).then(async (res) => {
      // console.log(res.data, "from cart deets");
      await dispatch(setCartDetails(res.data.cart));
    });
  } catch (error) {
    toast.error("There was an error fetching cart details");
  }
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
export const updateUser = async (dispatch: any, getState: any) => {
  // Make an async HTTP request
  const user = getState().userReducer.userForm;

  // console.log(sku);
  await put(`update-user`, user)
    .then(async (res) => {
      // console.log(res, "from getUser");
      document.location.reload();
      await dispatch(setUserFormSubmissionStatus(true));
      toast.success("User successfully updated");

      // console.log(pro);
      // Dispatch an action with the todos we received
    })
    .catch(async (err) => {
      console.log(err);
      toast.error(
        "User Update Failed, Please wait a few seconds and try again"
      );
      await dispatch(setUserFormSubmissionStatus(false));
    });
};
