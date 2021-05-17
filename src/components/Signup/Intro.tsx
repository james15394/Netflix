import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const IntroContainer = styled.section`
  display: grid;
  place-items: center;
  background: #fff;
  height: calc(100vh - 90px);
  .intro__wrapper {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    .img {
      max-width: 300px;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .step {
      margin-bottom: 10px;
    }
    .title {
      font-weight: 500;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
    .introduction {
      margin-bottom: 20px;
      text-align: center;
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
    }
  }
`;
const Intro = () => {
  const history = useHistory();
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <IntroContainer>
      <motion.div
        className="intro__wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
            alt="logo"
          />
        </div>
        <div className="step">STEP 1 OF 3</div>
        <div className="title">Finish setting up your account.</div>
        <div className="introduction">
          Netflix is personalized for you. Create a password to watch Netflix on
          any device at any time.
        </div>
        <div
          className="btn"
          onClick={() => history.push("/seen/signup/regform")}
        >
          Continue
        </div>
      </motion.div>
    </IntroContainer>
  );
};

export default Intro;
