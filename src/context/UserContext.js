import React from "react";
import axios from "axios";
import config from "../config";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();


function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      return { ...state, isAuthenticated: true };
      //throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!login && !!password) {

    setIsLoading(true);
    localStorage.setItem(`email`, login);
    axios
      .post(`${config.APP.APIURL}signin`, {
        email: login,
        password: password,
      })
      .then((res) => {
        console.log(res)
        setIsLoading(false);
        if (res.status === 400) {
          setError(true);
          setIsLoading(false);
          dispatch({ type: 'SIGN_OUT_SUCCESS'})              
        } else if (res.status === 500) {
          setError(true);
          setIsLoading(false);
          dispatch({ type: 'SIGN_OUT_SUCCESS' })          
        } else if (res.status === 200) {  
          
          if(res.data.message==='Error: Invalid'){
            setError(true);
            setIsLoading(false);
            dispatch({ type: 'SIGN_OUT_SUCCESS' })  
          }else{
            localStorage.setItem('id_token', res.data.token)
            localStorage.setItem('user_id', res.data.userId)
            dispatch({ type: 'LOGIN_SUCCESS' })
            history.push('/app/dashboard')          
          }
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setIsLoading(false);
        dispatch({ type: 'Incorrect Credentials' })            
      });

  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

