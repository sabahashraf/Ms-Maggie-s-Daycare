import React from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { serviceId } = useParams();
  const handleCheckOut = (event) => {
    event.preventDefault();
    toast("Thank you for the booking");
  };
  return (
    <div>
      <h2 className="text-center text-purple my-5">Confirm Your Booking</h2>
      <form onSubmit={handleCheckOut}>
        <input type="text" name="name" id="" placeholder="Your name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />

        <input
          type="text"
          name="address"
          id=""
          placeholder="Your address"
          required
        />

        <input type="number" name="phone" id="" placeholder="Phone#" required />

        <input id="signUpBtn" type="submit" value="Checkout "></input>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
