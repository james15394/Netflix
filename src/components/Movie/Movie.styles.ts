import styled from "styled-components";

export const MovieContainer = styled.section`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;
export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  .fa-spinner {
    font-size: 9rem;
    color: #fff;
    padding: 100px;
  }
  .movie__genre {
    margin: 20px 0;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .active {
      background: #f53797;
      color: #fff;
    }
    button {
      margin: 0 20px;
      padding: 10px 20px;
      font-size: 1.2rem;
      background: #fff;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    }
  }
  .wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 100px 50px;

    .movie__item {
      margin: 10px;
      min-width: 200px;
      min-height: 250px;
      position: relative;
      .img {
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: content;
          border-radius: 10px;
        }
      }
      h4 {
        margin-top: 10px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
