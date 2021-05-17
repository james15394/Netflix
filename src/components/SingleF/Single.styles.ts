import styled from "styled-components";

interface Prop {
  image: string;
}
export const SingleFilm = styled.section<Prop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 100px;
  background: radial-gradient(
      rgba(0, 0, 0, 0.99),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6)
    ),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;
export const SingleContainer = styled.section`
  max-width: 70%;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  color: #fff;
  margin-top: 80px;
  .single__detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .single__left {
      margin-right: 20px;
      max-width: 350px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
      }
    }
    .single__right {
      h4 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }
      span {
        margin-left: 10px;
        font-size: 1rem;
      }
      .fNVLTH {
        margin: 10px 0;
      }
    }
  }
  hr {
    width: 100%;
    background: #fff;
    margin: 10px 0;
  }
  .single__review {
    .reviewItem {
      margin: 10px 0;
      h4 {
        color: #000;
        font-size: 1.2rem;
      }
      p {
        span {
          color: #141111;
          cursor: pointer;
          line-height: 2;
          text-decoration: underline;
        }
      }
    }
  }
`;
export const SingleSimilar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0;
  width: 90%;
  overflow: hidden;
  h3 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 2rem;
  }
  .similarMovieList {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    position: relative;
    position: relative;
    :hover {
      .slick-prev,
      .slick-next {
        visibility: visible;
      }
    }
    .slick-slider {
      width: 100%;
    }
    .slick-slide {
      padding: 0 8px;
    }

    .slick-prev {
      left: 20px;
      z-index: 1;
      visibility: hidden;
      transition: all 0.4s ease-in-out;
      ::before {
        font-size: 40px;
      }
    }
    .slick-next {
      transition: all 0.4s ease-in-out;
      right: 40px;
      ::before {
        font-size: 40px;
      }
      visibility: hidden;
    }
  }
`;
