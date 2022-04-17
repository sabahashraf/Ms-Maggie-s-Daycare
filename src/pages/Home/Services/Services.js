import React from "react";
import longCare from "../../../images/long-care (1).jpg";
import afterCare from "../../../images/after-care (1) .jpg";
import meal from "../../../images/meal (1) .jpg";
import "./Services.css";
import Service from "../Service/Service";

const services = [
  {
    id: 1,
    title: "Long Day Care",
    img: longCare,
    description:
      "This service allows your kids to spent upto 8 hours in the daycare.",
    price: 80,
  },
  {
    id: 2,
    title: "After school Care",
    img: afterCare,
    description:
      "in this service I can pick up your kid from school and they can spent upto 3 hours in the daycare",
    price: 50,
  },
  {
    id: 3,
    title: "Meals",
    img: meal,
    description:
      "if you don't want to pack your kid's meal and leave this responsibility on methis service is for you.",
    price: 30,
  },
];

const Services = () => {
  return (
    <div className="container" id="services">
      <h2 className="text-primary text-center mt-5">Services I provide</h2>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
