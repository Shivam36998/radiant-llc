import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import {useMediaQuery} from 'react-responsive'

const Card = ({ item, showDetail, setShowDetail }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setShowDetail(!showDetail);
  };
  const isMobile = useMediaQuery({maxWidth:820})
  return (
    <div className="card1"  >
      <div className="image">
        <img src={item.img1} alt="" />
      </div>
      <div className="text">
        <p>
          <h4>{item.heading}</h4>
          {item.text1}
        </p>
        <h4>Main Highlight</h4>
        <button>26% off</button>
        <div className="box">
          <div className="box1">
            <p>
              <span>9.9</span> Building Responsive
            </p>
            <p>
              <span>9.9</span> Cool
            </p>
            <p>
              <span>9.9</span> Docs
            </p>
          </div>
          <div className="box2">
            <h4>why we love it</h4>
            <p>
              <span>
                <FaCheckCircle className="icon" /> Documentation
              </span>
            </p>
            <p>
              <span>
                <FaCheckCircle className="icon" /> Easy use
              </span>
            </p>
            <p>
              <span>
                <FaCheckCircle className="icon" /> Out of Box
              </span>
            </p>
          </div>
        </div>
        <div className="more_info" onClick={handleClick}>
          <a href="">show more</a> <FaAngleDown className="icon" />
        </div>
      </div>
      <div className="rating" style={!isMobile ? { height: '400px' } : {}}>
        <div className="top">
          <h1>{item.rating}</h1>
          <p>{item.remark}</p>
          <img src={item.star} alt="" />
        </div>
        <button >view</button>
      </div>
      {item.offer.length ? (
        <>
          <div className="trends">
            <GoTrophy className="icon" /> {item.offer}
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="number">{item.id}</div>
    </div>
  );
};

const Card1 = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);
  const showMore = (e) => {
    e.preventDefault();
    setShowDetail(!showDetail);
    console.log("I am clicked");
  };
  console.log(showDetail);
  return (
    <>
      {!showDetail && (
        <div className="card1">
          <div className="image">
            <img src={item.img1} alt="" />
          </div>
          <div className="text">
            <p>
              <h4>{item.heading}</h4>
              {item.text1}
            </p>
            <h4>Main Highlight</h4>
            <p className="highlight">{item.text2}</p>
            <div className="more_info" onClick={showMore}>
              <a href="">show more</a> <FaAngleDown className="icon" />
            </div>
          </div>
          <div className="rating">
            <div className="top">
              <h1>{item.rating}</h1>
              <p>{item.remark}</p>
              <img src={item.star} alt="" />
            </div>
            <button>view</button>
          </div>
          {item.offer.length ? (
            <>
              <div className="trends">
                <GoTrophy className="icon" /> {item.offer}
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="number">{item.id}</div>
        </div>
      )}
      {showDetail && (
        <Card
          item={item}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default Card1;
