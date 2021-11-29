import React, { useState } from "react";
import "./HeaderNav.css";

function HeaderNav() {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar" onClick={() => setShow(true)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HeaderNav;
