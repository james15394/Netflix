import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Header = styled.div`
  display: grid;
  place-items: center;
  background: #fff;
  height: 90px;
  border-bottom: 1px solid rgb(186 152 152 / 40%);
  .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 150px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
`;
const SignupHeader = () => {
  const history = useHistory();

  return (
    <Header>
      <div className="wrapper">
        <div className="left" onClick={() => history.push("/seen")}>
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="logo"
          />
        </div>
        <div className="right">Sign in</div>
      </div>
    </Header>
  );
};

export default SignupHeader;
