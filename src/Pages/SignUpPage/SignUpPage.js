import React, { Fragment } from "react";
import "./SignUpPage.css";
import fbImgTwo from "../../Assets/fb.png";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const signUpClickHandler = () => {
    navigate("/");
  };

  const logInClickHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="signupform">
        <div className="image">
          <img
            className="fbImg"
            src={fbImgTwo}
            alt="fbImgThree"
          />
        </div>
        <div className="formdetails">
          <h3 className="htag">Create a New Account</h3>
          <p className="sentence">It's Quick and Easy.</p>
          <label>First Name</label>
          <input
            className="inputclass"
            type="firstname"
            placeholder="First Name"
          />
          <label>Sur Name</label>
          <input
            className="inputclass"
            type="surname"
            placeholder="Sur Name"
          />
          <label>Mobile Number</label>
          <input
            className="inputclass"
            type="number"
            placeholder="Mobile Number"
          />
          <label>Email ID</label>
          <input
            className="inputclass"
            type="email"
            placeholder="Email Address"
          />
          <label>New Password</label>
          <input
            className="inputclass"
            type="numberortext"
            placeholder="New Password"
          />
          <div>
            <label>Date Of Birth</label>
            <input
              type="date"
              className="inputclass"
            />
          </div>
          <div>
            <label>Gender</label>
            <br />
            <label>Female</label>
            <input
              type="radio"
              name="Female"
              placeholder="Female"
            />
            <label>Male</label>
            <input
              type="radio"
              name="Male"
              placeholder="Male"
            />
            <label>Others</label>
            <input
              type="radio"
              name="Others"
              placeholder="Others"
            />
          </div>
          <button
            className="signUpbtn"
            onClick={signUpClickHandler}
          >
            Sign Up
          </button>
          <div className="downlines">
            <p className="lineone">Already have an Account? </p>
            <p className="linetwo">
              Go to
              <button
                className="loginBtn"
                onClick={logInClickHandler}
              >
                LogIn
              </button>
              page
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
