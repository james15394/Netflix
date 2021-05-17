import styled from "styled-components";

interface ItemProp {
  image: boolean;
}
export const RowWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  .row__wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h3 {
    color: #fff;
    text-transform: capitalize;
  }
`;
export const RowItemContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 20px;
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
`;

export const RowItem = styled.section<ItemProp>`
  position: relative;
  border-radius: 10px;
  :hover {
    .movie__detail {
      z-index: 100;
    }
    h4 {
      display: none;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  h4 {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    width: 100%;
    padding: 0 20px;
    transition: all 0.6s;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    backdrop-filter: blur(1px);
  }
  .movie__detail {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    content: "";
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5px;
    z-index: -100;
    transition: z-index 0.5s;
    color: #fff;
    border-radius: 10px;
    backdrop-filter: blur(1px);
    p {
      margin-top: 5px;
      font-size: 0.8rem;
    }
  }
`;
