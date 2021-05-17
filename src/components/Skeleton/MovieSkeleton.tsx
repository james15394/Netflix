import React from "react";
import styled, { keyframes } from "styled-components";
import Shimmer from "./Shimmer";

const animate = keyframes`
  0% {transform: translateX(-150%); }
  60% { transform: translateX(-60%);}
  100% { transform: translateX(150%);}
`;
const SkeletonContainer = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 50px;
  .wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 100px 50px;
    place-content: center;
  }
  .box {
    position: relative;
    overflow: hidden;
    display: grid;
    place-self: start;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 10px;
    place-self: center;
    .inner {
      width: 150px;
      height: 250px;
      background: #dddddd;
      border-radius: 10px;
    }
    .line1 {
      position: relative;
      margin: 5px 0;
      width: 100px;
      height: 10px;
      background: #dddddd;
      border-radius: 10px;
      overflow: hidden;
    }
    .line2 {
      width: 80px;
      height: 10px;
      background: #dddddd;
      border-radius: 10px;
    }
    .shimmer__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: ${animate} 2s infinite;
      .shimmer__inside {
        width: 50%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        transform: skewX(-20deg);
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
const MovieSkeleton = () => {
  return (
    <SkeletonContainer>
      <div className="wrapper">
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
        <div className="box">
          <div className="inner"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <Shimmer />
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default MovieSkeleton;
