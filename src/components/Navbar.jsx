import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  return (
<nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="#">
    Ezekiel Everest
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link
        to="/"
        className={
          location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        <button className="btn btn-lg rosterBtn">About</button>
      </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/React-Portfolio/#/portfolionew">
          Portfolio
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
