import styled from "styled-components";

export const PaginationContainer = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  margin: 100px 0;
  .pageNo {
    ul {
      display: flex;
      .active {
        background: #fff;
        color: #234b58;
      }
      li {
        list-style: none;
        padding: 6px;
        border: 1px solid #fff;
        margin: 10px;
        cursor: pointer;
        color: #fff;
      }
    }
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  .btn {
    background: transparent;
    border: none;

    i {
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
