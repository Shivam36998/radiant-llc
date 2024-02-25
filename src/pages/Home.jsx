import React from "react";
import "../styles/mystyles.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Card1 from "./Card1";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Card2 from "./Card2";

const Home = () => {

  const data = [
     {
       id:'1',
       img1:'./assets/image1.svg',
       heading:'WixPro 72-Inch Responsive Website Builder',
       text1:'- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
       text2:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
       rating:'9.8',
       remark:'exceptional',
       star:'./assets/image2.svg',
       offer:'Best choice'
     },
     {
      id:'2',
      img1:'./assets/image1.svg',
      heading:'SiteCraft 68-Inch Ultimate Web Design Studio',
      text1:'- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
      text2:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
      rating:'9.5',
      remark:'excellent',
      star:'./assets/image3.svg',
      offer:'Best Value'
     },
     {
      id:'3',
      img1:'./assets/image1.svg',
      heading:'WixPro 72-Inch Responsive Website Builder',
      text1:'- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
      text2:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      rating:'9.8',
      remark:'exceptional',
      star:'./assets/image2.svg',
      offer:''
    },
    {
      id:'4',
      img1:'./assets/image1.svg',
      heading:'SiteCraft 68-Inch Ultimate Web Design Studio',
      text1:'- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
      text2:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
      rating:'9.5',
      remark:'exceptional',
      star:'./assets/image3.svg',
      offer:'Best Value'
     },
  ]
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
        {
          data.map((item,idx)=>(
            <Card1 key={idx} item={item} />
          ))
        }
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
