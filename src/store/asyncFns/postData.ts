// import { RootState, AppDispatch } from "..";
import { post } from "../../client/client";
// import { loginForm } from "../../pages/login/Login";
// import { RootState, AppDispatch } from "..";

export const login = (dispatch: any, getState: any) => {
  // Make an async HTTP request
  post("login", getState.authReducer.form).then((res) => {
    const responseData = res.data;
    // Dispatch an action with the todos we received
    dispatch({ type: "user", payload: responseData });
    // Check the updated store state after dispatching
    // const allTodos = getState().todos;
    // console.log("Number of todos after loading: ", allTodos.length);
  });
};
