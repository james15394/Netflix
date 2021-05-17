import React from "react";
import styled, { keyframes } from "styled-components";
import Shimmer from "./Shimmer";

const animate = keyframes`
  0% {transform: translateX(-150%); }
  60% { transform: translateX(-60%);}
  100% { transform: translateX(150%);}
`;
const SingleSkeletonContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;

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
  place-items: center;
  .single__wrap {
    width: 60%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    background: rgba(255, 255, 255, 0.6);
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    .img {
      width: 200px;
      height: 300px;
      border-radius: 10px;
      background: rgba(255, 255, 255);
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 1;
      margin-left: 50px;
      .line {
        width: 100%;
        height: 20px;
        background: rgba(255, 255, 255);
        margin-bottom: 10px;
        border-radius: 10px;
        :nth-child(1) {
          width: 50%;
        }
        :nth-child(2),
        :nth-child(3) {
          width: 100%;
        }
      }
    }
  }
`;
const SingleSkeleton = () => {
  return (
    <SingleSkeletonContainer>
      <div className="single__wrap">
        <div className="img"></div>
        <div className="right">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <Shimmer />
      </div>
    </SingleSkeletonContainer>
  );
};

export default SingleSkeleton;
