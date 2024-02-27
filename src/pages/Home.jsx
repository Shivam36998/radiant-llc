import React, { useState } from "react";
import "../styles/mystyles.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Card1 from "./Card1";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Card2 from "./Card2";
import { useMediaQuery } from "react-responsive";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";
import data from "../assets/data";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const [showLinks, setShowLinks] = useState(false);


  const handleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const handleLinks1 = () => {};

  return (
    <div className="section">
      <div className="header">
        <h1>Best Website builders in the US</h1>
        <div className="header_text">
          <div className="header_left">
            <p>
              <FaRegCheckCircle /> <span>Last Updated - February 22, 2020</span>
            </p>
            <p>
              <CgDanger /> <span>Advertising Disclosure</span>
            </p>
          </div>
          <div className="header_right">
            <p>
              Top Relevent{" "}
              <span>
                <FaAngleDown />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="links">
        {isMobile ? (
          <>
            <button className="dropdwn-btn" onClick={handleLinks}>
              All Tabs{" "}
              <span>
                {!showLinks ? <BsCaretDownFill /> : <BsCaretUpFill />}
              </span>
            </button>
            {showLinks ? (
              <>
                <div class="dropdown-content">
                  <a href="#">Tools</a>
                  <a href="#">AWS Builder</a>
                  <a href="#">Start Build</a>
                  <a href="#">Build Supplies</a>
                  <a href="#">Tooling</a>
                  <a href="#">Blue Hosting</a>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <ul>
              <li>
                <a href="#">Tools</a>
              </li>
              <li>
                <a href="#">AWS Builder</a>
              </li>
              <li>
                <a href="#">Start Build</a>
              </li>
              <li>
                <a href="#">Build Supplies</a>
              </li>
              <li>
                <a href="#">Tooling</a>
              </li>
              <li>
                <a href="#">Blue Hosting</a>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="links1">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <FaAngleRight className="icon" />
          </li>
          <li>
            <a href="#">Hosting for all</a>
          </li>
          <li>
            <FaAngleRight className="icon" />
          </li>
          <li>
            <a href="#">Hosting</a>
          </li>
          <li>
            <FaAngleRight className="icon" />
          </li>
          <li>
            <a href="#">Hosting 5</a>
          </li>
          <li>
            <FaAngleRight className="icon" />
          </li>
          <li>
            <a href="#">Hosting 6</a>
          </li>
        </ul>
      </div>
      <div className="cards">
        {data.map((item, idx) => (
          <Card1 key={idx} item={item} />
        ))}
      </div>
      <div className="hotdeals">
        <h1>Related deals you might like for</h1>
        <div>
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
      <div className="option">
        <h1>Sign up and get exclusive special deals</h1>
        <div>
          <input type="text" />
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
