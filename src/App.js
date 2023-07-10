import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/Home/Home";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
        <Route
          path="/forgotpassword"
          element={<ForgotPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
