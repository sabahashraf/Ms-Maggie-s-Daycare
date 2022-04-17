import React from "react";
import img from "../../../images/404image.jpg";

const NotFound = () => {
  return (
    <div className="container my-5 text-center">
      <img className="img-fluid" src={img} alt="" />
    </div>
  );
};

export default NotFound;
