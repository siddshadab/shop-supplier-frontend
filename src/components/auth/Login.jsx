import React, { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../../config'

const Login = ({ setIsLogin }) => {
  const email = useRef("");
  const password = useRef("");
  const LINK = process.env.REACT_APP_HEROKU_LINK;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const PREFIX = "Shop-Suppliers";

  const failedNotify = (message) => {
    toast.error(message);
  };

  const onSubmit = (event) => {
    setIsLoading(true);
    localStorage.setItem(`${PREFIX}Email`, email.current.value);
    event.preventDefault();
    axios
      .post(`${config.APP.APIURL}signin`, {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        console.log(res)
        setIsLoading(false);
        if (res.status === 400) {
          failedNotify(res.data.message);
        } else if (res.status === 500) {
          failedNotify("Internal server error");
        } else if (res.status === 200) {
          console.log("res.data")
          console.log(res.data)
          console.log(res.data.userId)
          localStorage.setItem(`${PREFIX}Token`, res.data.token);
          localStorage.setItem(`${PREFIX}UserId`, res.data.userId);
      
          history.push("/homepage");
          
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        failedNotify("Incorrect Credentials");
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading ? (
        <Loading>
          <h1>Please wait while we create your account !!</h1>
        </Loading>
      ) : (
        <React.Fragment>
          <h3>Login</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                ref={email}
                className="form-control w-100"
                placeholder="enter email"
                required
              />
            </div>
            <div className="form-group">
              <input
                ref={password}
                type="password"
                className="form-control w-100"
                placeholder="enter password"
                required
              />
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <p>
                Don't have an account? then{" "}
                <em onClick={() => setIsLogin(false)}>Signup</em>
              </p>
            </div>
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Login;
