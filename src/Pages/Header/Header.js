import React, { Fragment } from "react";
import "./Header.css";
import LoginPage from "../LoginPage/LoginPage";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <LoginPage />
      </div>
    </Fragment>
  );
};

export default Header;
