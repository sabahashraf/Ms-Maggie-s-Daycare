import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../images/daycareLogo.png";
import GoogleLogIn from "../../Shared/GoogleLogIn/GoogleLogIn";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
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
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userinfo.email, userinfo.password);
  };

  const resetPassword = async () => {
    if (userinfo.email) {
      await sendPasswordResetEmail(userinfo.email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container">
      <div className="text-center my-5">
        <img src={logo} alt=""></img>
      </div>
      <form onSubmit={handleLogin}>
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

        <input id="signUpBtn" type="submit" value="Log in"></input>
      </form>
      {error && (
        <p className="text-danger text-center">
          <small>{error.message}</small>
        </p>
      )}
      <p className="text-center">
        <small>
          New to Maggie's day care!&nbsp;please &nbsp;
          <Link className="text-purple text-decoration-none" to="/signup">
            register
          </Link>
        </small>
      </p>
      <div className="text-center" style={{ color: "rgb(186, 56, 186)" }}>
        {" "}
        <button
          onClick={resetPassword}
          className="btn btn-link text-decoration-none "
        >
          Forget password?
        </button>
        <ToastContainer />
      </div>
      <GoogleLogIn></GoogleLogIn>
    </div>
  );
};

export default Login;
