import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../../images/daycareLogo.png";
import { Link } from "react-router-dom";
import GoogleLogIn from "../../Shared/GoogleLogIn/GoogleLogIn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  if (loading) {
    return <Loading></Loading>;
  }
  const handleNameOnBlur = (event) => {
    setUserinfo({ ...userinfo, name: event.target.value });
    console.log(userinfo);
  };
  const handleEmailOnBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserinfo({ ...userinfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setUserinfo({ ...userinfo, email: "" });
      setErrors({ ...errors, email: "invalid email" });
    }
    console.log(userinfo);
  };
  const handlePasswordOnBlur = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setUserinfo({ ...userinfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    }
    console.log(userinfo);
  };
  const handleConfirmPasswordOnBlur = (event) => {
    if (event.target.value === userinfo.password) {
      setUserinfo({ ...userinfo, confirmPassword: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password doesn't match" });
      setUserinfo({ ...userinfo, confirmPassword: "" });
    }
    console.log(userinfo);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(userinfo);
    createUserWithEmailAndPassword(userinfo.email, userinfo.password);
  };
  return (
    <div className="container">
      <div className="text-center my-5">
        <img src={logo} alt=""></img>
      </div>
      <form onSubmit={handleSignUp}>
        <input
          onBlur={handleNameOnBlur}
          type="text"
          name="name"
          id=""
          placeholder="Name"
          required
        />
        <input
          onBlur={handleEmailOnBlur}
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
        {errors?.email && (
          <p className="text-danger text-center">
            <small>{errors.email}</small>
          </p>
        )}
        <input
          onBlur={handlePasswordOnBlur}
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        {errors?.password && (
          <p className="text-danger text-center">
            <small>{errors.password}</small>
          </p>
        )}
        <input
          onBlur={handleConfirmPasswordOnBlur}
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
      {error && (
        <p className="text-danger text-center">
          <small>{error.message}</small>
        </p>
      )}
      <p className="text-center">
        <small>
          Already registered?&nbsp;
          <Link className="text-purple text-decoration-none" to="/login">
            Login here!
          </Link>
        </small>
      </p>
      <GoogleLogIn></GoogleLogIn>
    </div>
  );
};

export default SignUp;
