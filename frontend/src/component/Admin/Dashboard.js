import { Typography } from "@mui/material";
import React, { useEffect, Fragment } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";

function Dashboard() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);

  let outOfStock = 0;
  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin" />

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Sidebar />
          <div className="dashboardContainer">
            <Typography component="h1">Dashboard</Typography>
            <div className="dashboardSummary">
              <div>
                <p>
                  Total Amount <br />
                  Rs. 2000
                </p>
              </div>
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p>Products</p>
                  <p>{products?.length}</p>
                </Link>
                <Link to="/admin/orders">
                  <p>Orders</p>
                  <p>40</p>
                </Link>
                <Link to="/admin/users">
                  <p>Users</p>
                  <p>10</p>
                </Link>
              </div>
            </div>

            <div className="lineChart">
              <Line data={lineState} />
            </div>
            <div className="doughnutChart">
              <Doughnut data={doughnutState} />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Dashboard;
