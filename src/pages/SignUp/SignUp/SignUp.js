import React from "react";
import "./SignUp.css";
import logo from "../../../images/daycareLogo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <div className="text-center my-5">
        <img src={logo} alt=""></img>
      </div>
      <form>
        <input type="text" name="name" id="" placeholder="Name" required />
        <input type="email" name="email" id="" placeholder="Email" required />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm-password"
          id=""
          placeholder="Confirm Password"
          required
        />
        <div className="check-container">
          <input type="checkbox" name="checkbox" id="" />
          <label className="ms-2" htmlFor="checkbox">
            <small>Accept terms and conditions</small>
          </label>
        </div>
        <input id="signUpBtn" type="submit" value="Sign Up"></input>
      </form>
      <p className="text-center">
        <small>
          Already registered?&nbsp;
          <Link className="text-purple text-decoration-none" to="/login">
            Login here!
          </Link>
        </small>
      </p>
    </div>
  );
};

export default SignUp;
