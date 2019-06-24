import React from "react";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/"> Articles </Link>
      <Link to="/topics"> Topics </Link>
    </div>
  );
}

export default NavBar;
