import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  place-items: center;
  background: #fff;
  height: calc(100vh - 90px);
  align-items: start;
  padding-top: 30px;
  .wrapper {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    .img {
      max-width: 50px;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    .step {
      margin-bottom: 10px;
      span {
        font-weight: 500;
      }
    }
    .title {
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    .item__wrap {
      display: flex;
      flex-direction: column;
      algin-items: flex-start;
      justify-content: center;
    }
    .item {
      margin-bottom: 20px;
    }
    .btn {
      width: 100%;
      border: none;
      border-radius: 3px;
      color: #fff;
      background: #f6121d;
      min-height: 48px;
      display: grid;
      place-items: center;
      font-size: 17px;
      cursor: pointer;
       outline-width: 0;
    }
  }
`;
const Home = () => {
  const history = useHistory();
    const ref = useRef<HTMLButtonElement>(null);
 const handlePress = (e: any) => {
    e.key === "Enter" && history.push("/seen/signup/planform");
  };
  useEffect(() => {
    ref.current?.focus();
  }, []);
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <Container>
      <motion.div
        className="wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
            alt="logo"
          />
        </div>
        <div className="step">
          STEP <span>2</span> OF <span>3</span>
        </div>
        <div className="title">Choose your plan.</div>
        <div className="item__wrap">
          <div className="item">No commitments, cancel anytime.</div>
          <div className="item">Everything on Netflix for one low price.</div>
          <div className="item">Unlimited viewing on all your devices.</div>
        </div>

        <button
          className="btn"
           ref={ref}
          onKeyPress={handlePress}
          onClick={() => history.push("/seen/signup/planform")}
        >
          See the Plans
        </button>
      </motion.div>
    </Container>
  );
};

export default Home;
