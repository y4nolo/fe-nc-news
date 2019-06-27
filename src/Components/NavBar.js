import React from "react";
import { Link } from "@reach/router";
import "../css/main.css";

function NavBar() {
  return (
    <div
    // id="menu"
    >
      <ul class="links">
        <br />
        <br />
        <li>
          <a>
            <Link to="/"> Home </Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/"> Articles </Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/topics"> Topics </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
