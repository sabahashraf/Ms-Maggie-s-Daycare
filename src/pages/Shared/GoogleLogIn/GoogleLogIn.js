import React from "react";
import img from "../../../images/google.png";
import "./GoogleLogin.css";

const GoogleLogIn = () => {
  return (
    <div className="mt-3 mb-5 text-center">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="horizontal"></div>
        <div className="mx-2">Or</div>
        <div className="horizontal"></div>
      </div>
      <button className="nav-btn text-center">
        <img className="me-3" src={img} style={{ width: "30px" }} alt=""></img>
        <span>Sign in with google</span>
      </button>
    </div>
  );
};

export default GoogleLogIn;
