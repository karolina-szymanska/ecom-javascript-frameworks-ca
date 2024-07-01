import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

// Component to display the navigation links
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <IoCart size="2rem" />
    </nav>
  );
};

export default Navigation;
