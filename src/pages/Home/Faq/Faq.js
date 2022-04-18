import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container ">
      <h2 className="text-purple text-center my-5 about">FAQ</h2>
      <Accordion className="w-75 mx-auto mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are opening hours?</Accordion.Header>
          <Accordion.Body>
            From 9:30 am to 6:00 pm, Monday to Friday
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What Ages Do You Cater For?</Accordion.Header>
          <Accordion.Body>
            INFANTS (6 weeks to 15 months), TODDLERS (1 to 2.5 years), PRESCHOOL
            (2.5 to 3 years), PRE-K (3 to 5 years)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you provide meals?</Accordion.Header>
          <Accordion.Body>
            Yes kids can have meals here with extra 30$
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
