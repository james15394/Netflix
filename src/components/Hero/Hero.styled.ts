import styled from "styled-components";

interface HeroImage {
  image: string;
}

export const HeroWrapper = styled.section<HeroImage>`
  background-position: center;
  width: 100%;
  height: 750px;
  background-size: cover;
  background: radial-gradient(
      farthest-corner at 1500px 20px,
      rgba(92, 154, 172, 0.2) 0 5%,
      rgba(56, 239, 245, 0.5) 30% 40%,
      rgba(45, 177, 181) 70% 90%
    ),
    url(${(props) => `https://image.tmdb.org/t/p/original/${props.image}`});
  background-repeat: no-repeat;
  background-size: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  .hero__wrapper {
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
  .hero__container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    justify-content: center;
    position: relative;
    z-index: 100;
    h4 {
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h2 {
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 2rem;
      margin-bottom: 10px;
      span {
        font-size: 1.2rem;
        color: #fff;
        margin-left: 1em;
        font-weight: 500;
      }
    }
    .genre {
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
    }
    button {
      background: #fff;
      border: none;
      padding: 10px 20px;
      margin-top: 20px;
      color: #5c9aac;
      text-transform: uppercase;
      border-radius: 30px;
      letter-spacing: 1.5px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
      :focus {
        outline: none;
      }
    }
  }
  .banner {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      #1e626d 10%,
      rgba(26, 119, 129, 0.1) 60%
    );
  }
`;
