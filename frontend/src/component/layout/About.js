import React from 'react'
import "./About.css"

const About = () => {
    return (
      <div className="aboutContainer">
        <h1>About Us</h1>
        <p>
          Hi, My name is{" "}
          <a
            href="https://www.linkedin.com/in/adarsh-tyagi-6a8abb181/"
            target="_blank"
            rel="noreferrer"
          >
            Adarsh Tyagi
          </a>{" "}
          and this is a E-Commerce project developed in MERN stack. User can
          create account, update profile, view products, add them to their cart
          and write reviews and can also place an order and view all their
          orders.
        </p>
        <p>
          For cart management browser's local storage is used and for payment
          stripe is used.{" "}
        </p>
        <h2>Go ahead and give it a try.</h2>
        <p>
          Contact with me: <span>adarshtyagi077@gmail.com</span>
        </p>
      </div>
    );
}

export default About
