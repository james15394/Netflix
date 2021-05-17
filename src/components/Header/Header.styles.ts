import styled from "styled-components";

interface Prop {
  navScroll: boolean;
  openSearch: boolean;
}
export const HeaderWrapper = styled.section<Prop>`
  position: fixed;
  top: 0;
  height: ${(props) => (props.navScroll ? "80px" : "100px")};
  display: grid;
  place-items: center;
  background: ${(props) => (props.navScroll ? "#fff" : "transparent")};
  box-shadow: ${(props) =>
    props.navScroll ? "0px 10px 10px rgba(0,0,0,0.2)" : "none"};
  width: 100%;
  z-index: 10000;
  transition: all 0.5s;
`;
export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
export const HeaderLeft = styled.div<Prop>`
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    padding-right: 30px;
    color: ${(props) => (props.navScroll ? "#1E6872" : "#fff")};
    text-transform: uppercase;
    letter-spacing: 1.8;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s;
    .fas {
    padding: 8px;
    border-radius: 50%;
  }

    form {
      display: flex;
      justify-content: center; 
      position: relative; 
      width: ${(props) => (props.openSearch ? "250px" : "40px")};
      height: 40px;
      border-radius: ${(props) => (props.openSearch ? "30px" : "40px")};
      transition: 0.5s;
      overflow: hidden;
      background: ${(props) => (props.navScroll ? "#289FAC" : "#fff")};
      box-shadow:  5px 5px 5px rgba(0,0,0,0.2);
      i {
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height:40px;
        z-index: 10000;
        background: ${(props) => (props.navScroll ? "#289FAC" : "#fff")};
        color: ${(props) => (props.navScroll ? "#fff" : "#289FAC")};
        display: flex;
        justify-content: center;
        transition: 0.5s;
        align-items: center;
      }
      input[type='text'] {
        position: relative;
        left: 40px;
        width: 100%;
        border: none;
        outline-width: 0;
        transition: all 0.5s;
        background: ${(props) => (props.navScroll ? "#289FAC" : "#fff")};
        ::placeholder {
          color: ${(props) => (!props.navScroll ? "#289FAC" : "#fff")};
          letter-spacing: 0.8px;
        }
        ::focus-visible {
          border: none;
        }
        ::focus {
          border: none;
        }
        
      }
      button{
        display: none;
      }
    }

`;
export const HeaderRight = styled.div`
  max-width: 100px;
  .image {
    cursor: pointer;
  }
  img {
    width: 100%;
    filter: saturate(1000) brightness(10000) invert(1000);
  }
`;
