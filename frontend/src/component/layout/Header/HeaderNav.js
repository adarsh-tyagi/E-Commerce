import React, { useState } from "react";
import "./HeaderNav.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const styles = {
  textDecoration: "none",
  color: "#404040",
  fontSize: "1.35rem",
  fontWeight: "bold",
  padding: "0.5rem 0",
  fontFamily: "monospace",
};

function HeaderNav() {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <div className="navbar" onClick={() => setShow(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div className="nav__header">
          <div onClick={() => setShow(false)}>
            <CloseIcon fontSize="large" />
          </div>
          <h1>E-Commerce</h1>
        </div>

        <div className="nav__links">
          <Link to="/" onClick={() => setShow(false)} style={styles}>
            Home
          </Link>
          <Link to="/products" onClick={() => setShow(false)} style={styles}>
            Products
          </Link>
          
          <Link to="/about" onClick={() => setShow(false)} style={styles}>
            About
          </Link>
          <div className="nav__icons">
            <Link to="/login" onClick={() => setShow(false)} style={styles}>
              <div>
                <AccountBoxIcon fontSize="large" />
              </div>
            </Link>
            <Link to="/search" onClick={() => setShow(false)} style={styles}>
              <div>
                <SearchIcon fontSize="large" />
              </div>
            </Link>
            <Link to="/cart" onClick={() => setShow(false)} style={styles}>
              <div>
                <ShoppingCartIcon fontSize="large" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
