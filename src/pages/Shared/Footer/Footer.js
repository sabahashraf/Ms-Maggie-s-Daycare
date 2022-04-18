import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-auto">
      <p>
        <small className=" footer">
          &copy;{year} Ms.Maggie's Home Daycare.All Rights Reserved
        </small>
      </p>
    </footer>
  );
};

export default Footer;
