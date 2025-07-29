import React from "react";
import "./AboutUs.css";
import loginImage from "../../assets/login-image.jpg"; 

const AboutUs = () => {
  return (
    <section className="about" id="aboutUs">
      <div className="about-image">
        <img src={loginImage} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, id quae. Commodi odit ut itaque modi fugiat? Similique aliquid consequuntur nobis possimus facere, eius repellendus deleniti, consectetur fuga et impedit.
        </p>
        <a href="/" className="btn">
          Learn More <span className="arrow">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
