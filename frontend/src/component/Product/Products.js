import React, { useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#ff6349",
        },
      },
    },
  },
});

const categories = [
  "Laptop",
  "Mobile",
  "Speaker",
  "Headphone",
  "Keyboard",
  "Mouse",
  "Book",
];

function Products() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000]);
  const [category, setCategory] = useState("");

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, alert, error, price, category]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <ThemeProvider theme={theme}>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                size="small"
                min={0}
                max={100000}
              />
            </ThemeProvider>

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((cat) => (
                <li
                  className={`category-link ${cat === category && "active"}`}
                  key={cat}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
                pageRangeDisplayed={3}
                hideNavigation={true}
              />
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Products;
