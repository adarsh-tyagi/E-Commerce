import React, { useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <MetaData title="E-Commerce" />
          <div className="banner">
            <p>Welcome to E-Commerce</p>
            <h1>Find Amazing Products here</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
            <p>We sell items that you must have. Happy Shopping!</p>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Home;
