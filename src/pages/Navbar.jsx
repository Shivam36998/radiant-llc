import React from "react";
import { IoSearch } from "react-icons/io5";
import '../styles/mystyles.scss'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <div>
            <input type="text" />
            <IoSearch className="icon" />
          </div>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">website Builder</a>
        </li>
        <li>
          <a href="#">Today's Deals</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
