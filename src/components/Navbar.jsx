import React from "react";

function Navbar() {
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
        <a class="nav-link" href="/">
          About <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/portfolio1">
          Portfolio
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
