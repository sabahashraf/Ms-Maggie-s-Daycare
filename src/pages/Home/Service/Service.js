import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description, price, id } = service;
  const navigate = useNavigate();
  const navigateTocheckout = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-3 col-lg-4 col-md-3 col-sm-12 mb-5 position-relative">
      <Card className="" style={{ width: "18rem", height: "450px" }}>
        <Card.Img
          variant="top"
          src={img}
          height={200}
          className="img-thumbnail"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>Price:${price}/day</Card.Title>
          <button
            onClick={() => navigateTocheckout(id)}
            className="nav-btn position-absolute "
            style={{ bottom: "10px", right: "12px" }}
          >
            Book it!{" "}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
