import styled from "styled-components";

export const TvContainer = styled.section`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;
export const TvWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 50px;
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
  }
  .button {
    margin: 50px 0;
    button {
      margin: 0 50px;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
  }
`;
export const TvItem = styled.div`
  margin: 10px;
  min-width: 200px;
  min-height: 350px;
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
`;
