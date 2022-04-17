import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import img from "../../../images/google.png";
import Loading from "../Loading/Loading";
import "./GoogleLogin.css";

const GoogleLogIn = () => {
  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (userG) {
      navigate(from);
    }
  }, [userG]);
  if (loadingG) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-3 mb-5 text-center">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="horizontal"></div>
        <div className="mx-2">Or</div>
        <div className="horizontal"></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="nav-btn text-center"
      >
        <img className="me-3" src={img} style={{ width: "30px" }} alt=""></img>
        <span>Sign in with google</span>
      </button>
      {errorG && (
        <p className="text-danger text-center">
          <small>{errorG.message}</small>
        </p>
      )}
    </div>
  );
};

export default GoogleLogIn;
