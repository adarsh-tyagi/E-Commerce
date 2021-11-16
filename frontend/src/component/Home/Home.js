import React from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"
import Product from "./Product"

const product = {
  name: "IPhone X",
  images: [
    {
      url: "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
    },
  ],
  price: "Rs. 60000",
  _id: "421dqeg3ref",
};

function Home() {
    return (
      <React.Fragment>
        <div className="banner">
          <p>Welcome to E-Commerce</p>
          <h1>Find Amazing Products here</h1>
          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </div>
      </React.Fragment>
    );
}

export default Home
