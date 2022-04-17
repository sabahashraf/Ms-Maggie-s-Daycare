import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="container about w-75 mx-auto my-5">
      <h3 className="text-purple">
        Difference betweeen authorization and authentication?
      </h3>
      <p className="fs-5">
        In simple words, authentication means who a person is.it can be verified
        by his name, email address, password, date of birth, address and many
        more. On the otherhand,authorization means the resources an
        authenticated user can access.Access to resouces can be different from
        user to user or person to person.Like in a website a buyer /user can
        place an order but he is not authorized to change product's value.Again
        admin can change product's value, he is authorized to do that.Thus
        Authorization always takes place after authentication.
      </p>
      <h3 className="text-purple">
        {" "}
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p className="fs-5">
        Firebase is very easy to set up .Most of the cases you need front end
        knowledges to use it.It gives you built in functions to create
        authentication process for your project.Thus developers save
        developmentment time and increase productivity.Expect authentication it
        has services like cloud functions,realtime database,cloud
        firestore,cloud messaging and hosting.
      </p>
      <p className="fs-5">
        besides firebase,you can do token authentication,standard
        authentication.multifactor authentication,passwordless authentication
        ,social authentication to implement authentication for your project.
      </p>
      <h3 className="text-purple">
        What other services does firebase provide other than authentication
      </h3>
      <p className="fs-5">
        Firebase is a full package that can help for developing apps and
        websites faster .Some of the services are:
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </p>
    </section>
  );
};

export default Blogs;
