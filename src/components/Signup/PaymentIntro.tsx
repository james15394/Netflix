import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  place-items: center;
  align-items: start;
  background: #fff;
  height: calc(100vh - 90px);
  .intro__wrapper {
    width: 400px;
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    .img {
      max-width: 50px;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
    .step {
      margin-bottom: 10px;
      span {
        font-weight: 600;
      }
    }
    .title {
      font-weight: 700;
      margin-bottom: 30px;
      font-size: 1.5rem;
    }
    .introduction {
      margin-bottom: 20px;
      text-align: center;
      width: 60%;
      span {
        :first-child {
          margin-top: 20px;
        }
        display: block;
        font-weight: 700;
      }
    }
    .btn {
      width: 100%;
      border-radius: 3px;
      color: #8f8484;
      background: transparent;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 17px;
      padding: 0 15px;
      cursor: pointer;
      padding: 10px;
      border: 1px solid rgb(160 146 146 / 40%);
      border-radius: 3px;
            outline-width: 0;
      .method {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        h4 {
          font-weight: 300;
          margin-right: 10px;
        }
        .card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .imgContainer {
            min-width: 40px;
            margin: 0 5px;
          }
        }
        image {
          width: 100%;
          max-width: 100px;
          object-fit: contain;
        }
      }
      .arrow {
        margin-left: 40px;
      }
    }
  }
`;
const Intro = () => {
    const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      history.push("/seen/signup/creditoption");
    }
  };
  const history = useHistory();
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <Container>
      <motion.div
        className="intro__wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
            alt="logo"
          />
        </div>
        <div className="step">
          STEP <span>3</span> OF <span>3</span>{" "}
        </div>
        <div className="title">Set up your payment</div>
        <div className="introduction">
          Your membership starts as soon as you set up payment.
          <span>No commitments.</span> <span>Cancel online anytime.</span>
        </div>
        <button
          className="btn"
          onClick={() => history.push("/seen/signup/creditoption")}
          ref={ref}
          onKeyPress={handleKeyPress}
        >
          <div className="method">
            <h4>Credit or Debit card</h4>
            <div className="card">
              <div className="imgContainer">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                  alt="visa"
                />
              </div>
              <div className="imgContainer">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
                  alt="mastercard"
                />
              </div>
              <div className="imgContainer">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
                  alt="american express"
                />
              </div>
            </div>
          </div>
          <div className="arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
        </button>
      </motion.div>
    </Container>
  );
};

export default Intro;
