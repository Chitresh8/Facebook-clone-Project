import React, { Fragment, useState } from "react";
import "./LoginPage.css";
import fbImg from "../../Assets/fb.jpg.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [emailOrPhoneInput, setEmailOrPhoneInput] = useState("");
  const [emailOrPhoneShow, setEmailOrPhoneShow] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputShow, setPasswordInputShow] = useState(false);

  const emailOrPhoneChangeHandler = (event) => {
    setEmailOrPhoneInput(event.target.value);
    setEmailOrPhoneShow(false);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
    setPasswordInputShow(false);
  };

  const loginClickHandler = () => {
    if (emailOrPhoneInput === "") {
      setEmailOrPhoneShow(true);
    }
    if (passwordInput === "") {
      setPasswordInputShow(true);
    }
    if (emailOrPhoneInput === "" || passwordInput === "") {
      return;
    }
    navigate("/home");
  };

  const forgotPasswordHandler = () => {
    navigate("/forgotpassword");
  };

  const newAccountHandler = () => {
    navigate("/signup");
  };

  const pageCreateHandler = () => {};

  return (
    <Fragment>
      <div className="headerdata">
        <div className="loginPage">
          <div className="fbimg">
            <img
              src={fbImg}
              alt="facebook"
            />
          </div>

          <div className="logindetails">
            <input
              className="inputs"
              type="text or numbers"
              placeholder="Email address or Phone Number"
              value={emailOrPhoneInput}
              onChange={emailOrPhoneChangeHandler}
            />
            {emailOrPhoneShow ? (
              <p className="errortext">
                Please enter Valid Email & Phone details
              </p>
            ) : null}
            <input
              className="inputs"
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={passwordChangeHandler}
            />
            {passwordInputShow ? (
              <p className="errortext">Enter Valid Password</p>
            ) : null}
            <button
              className="loginbtn"
              onClick={loginClickHandler}
            >
              Log in
            </button>
            <p>
              <span
                className="forgotpassword"
                onClick={forgotPasswordHandler}
              >
                Forgotten Password?
              </span>
            </p>
            <button
              className="createnewacc"
              onClick={newAccountHandler}
            >
              Create new account
            </button>
          </div>

          <div className="createpage">
            <p>
              <span
                className="page"
                onChange={pageCreateHandler}
              >
                Create a page
              </span>
              for a celebrity,brand or business.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
