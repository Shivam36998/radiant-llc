import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/mystyles.scss";
import { useMediaQuery } from "react-responsive";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav>
      {!isMobile && (
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
      )}
      {isMobile && (
        <>
          <ul>
            <li>
              <div>
                <input type="text" />
                <IoSearch className="icon" />
              </div>
            </li>
            <li>
              {showMenu ? (
                <RxCross2 className="menu" onClick={handleMenu} />
              ) : (
                <IoMdMenu className="menu" onClick={handleMenu} />
              )}
            </li>
          </ul>
          {showMenu ? (
            <div className="navlinks">
              <ul>
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
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
