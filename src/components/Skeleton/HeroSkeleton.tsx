import React from "react";
import styled, { keyframes } from "styled-components";
import Shimmer from "./Shimmer";

const animate = keyframes`
  0% {transform: translateX(-150%); }
  60% { transform: translateX(-60%);}
  100% { transform: translateX(150%);}
`;
const HomeSkeleton = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 1000;
  width: 100%;
  padding-top: 150px;

  .home__container {
    position: relative;
    overflow: hidden;
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    padding: 40px;
    border-radius: 10px;
  }
  .line {
    width: 100%;
    border-radius: 10px;
    :nth-child(1) {
      width: 20%;
      background: #fff;
      height: 20px;
      margin-bottom: 20px;
    }
    :nth-child(2) {
      width: 30%;
      background: #fff;
      height: 20px;
      margin-bottom: 20px;
    }
    :nth-child(3) {
      width: 40%;
      background: #fff;
      height: 10px;
      margin-bottom: 20px;
    }
    :nth-child(4) {
      width: 50%;
      background: #fff;
      height: 20px;
      margin-bottom: 5px;
    }
    :nth-child(5) {
      width: 50%;
      background: #fff;
      margin-bottom: 5px;
      height: 20px;
    }
    :nth-child(6) {
      width: 50%;
      background: #fff;
      height: 20px;
      margin-bottom: 20px;
    }
    :nth-child(7) {
      width: 20%;
      background: #fff;
      height: 20px;
      margin-bottom: 20px;
    }
    :nth-child(8) {
      width: 25%;
      background: #fff;
      height: 30px;
    }
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
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    }
  }
`;

const HeroSkeleton = () => {
  return (
    <HomeSkeleton>
      <div className="home__container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <Shimmer />
      </div>
    </HomeSkeleton>
  );
};

export default HeroSkeleton;
