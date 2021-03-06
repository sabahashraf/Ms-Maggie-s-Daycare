import React from "react";
import "./About.css";
import person from "../../../images/person.png";

const About = () => {
  return (
    <section className="container about d-flex my-5 justify-content-center align-items-center flex-column flex-lg-row min-vh-100">
      <div className="order-md-2 order-1 me-md-5 mb-5">
        <img className="person order-lg-2 order-1" src={person} alt="" />
      </div>
      <div
        className="order-lg-1 order-2 pe-md-5 px-sm-3
      w-md-50"
      >
        <h2 className="text-purple mb-5 ">It's about me...</h2>
        <p className="fs-5 ">
          I'm Sabah.I had done bachelor of science in elctrical and electronics
          engineering.While I was completing my degree I was introduced with C
          programming language.That's when I felt that I like programming and
          computer science rather than electrical engineering.That's why after
          completing my degree I was looking for courses where I can find my
          passion and thus one day I found web development.First I started
          learning it by buying an udemy course.But while I decided to take web
          development as a career I enrolled in Programming hero's web
          development course.I am currently doing this course.I am working
          really hard ,trying to give my 100 percent,giving my learning priority
          over everything else so that I can successfully finish the course and
          get ready to enter in my professional life.
        </p>
      </div>
    </section>
  );
};

export default About;
