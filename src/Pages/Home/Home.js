import React, { Fragment } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import fblogo from "../../Assets/fb.png";

const Home = () => {
  const navigate = useNavigate();

  const logOutClickHandler = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className="imgdiv">
        <img
          src={fblogo}
          alt="fbLogo"
        />
      </div>
      <div className="contentdiv">
        <table className="hometable">
          <tr>
            <p>Welcome to Facebook Home Page</p>
            <p>If you need to Logout?</p>
            <p>Click Below</p>
          </tr>
          <td>
            <button
              className="logout-btn"
              onClick={logOutClickHandler}
            >
              Log Out
            </button>
          </td>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
