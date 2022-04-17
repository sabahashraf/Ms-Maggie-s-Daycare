import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/daycareLogo.png";
import GoogleLogIn from "../../Shared/GoogleLogIn/GoogleLogIn";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="text-center my-5">
        <img src={logo} alt=""></img>
      </div>
      <form>
        <input type="email" name="email" id="" placeholder="Email" required />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input id="signUpBtn" type="submit" value="Log in"></input>
      </form>
      <p className="text-center">
        <small>
          New to Maggie's day care!&nbsp;please &nbsp;
          <Link className="text-purple text-decoration-none" to="/signup">
            register
          </Link>
        </small>
      </p>
      <div
        className="text-center"
        style={{ color: "color:rgb(186, 56, 186);" }}
      >
        {" "}
        <button className="btn btn-link text-decoration-none ">
          Forget password?
        </button>
      </div>
      <GoogleLogIn></GoogleLogIn>
    </div>
  );
};

export default Login;
