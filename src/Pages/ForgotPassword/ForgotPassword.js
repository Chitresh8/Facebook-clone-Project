import React, { Fragment } from "react";
import "./ForgotPassword.css";
import fbImgOne from "../../Assets/fb.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const cancelClickHandler = () => {
    navigate("/home");
  };

  const searchClickHandler = () => {
    navigate("/home");
  };

  return (
    <Fragment>
      <div className="fpheader">
        <img
          src={fbImgOne}
          alt="fbImgOne"
        />
      </div>
      <div className="forgotpassworddetails">
        <div className="fpcontainer">
          <div className="divone">
            <h3>Find Your Account</h3>
          </div>
          <div className="divtwo">
            <table>
              <tr>
                <p>
                  Please enter your Email Address or Mobile Number to search for
                  your Account
                </p>
              </tr>
              <td>
                <input
                  className="fpinput"
                  type="emailaddressorphonenumber"
                  text="emailorphone"
                  placeholder="Email Address or Mobile Number"
                />
              </td>
            </table>
          </div>
          <div className="divthree">
            <button
              className="cancelbtn"
              onClick={cancelClickHandler}
            >
              Cancel
            </button>
            <button
              className="searchbtn"
              onClick={searchClickHandler}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
