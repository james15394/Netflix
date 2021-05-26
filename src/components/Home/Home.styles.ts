import styled from "styled-components";

export const HomeContainer = styled.section`
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/71cfa010-f8dd-4298-a94d-1ae5034a857c/bb3f65e5-fca2-41b0-80b7-d28f1d429edd/VN-en-20210425-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  );
  background-position: center;
  background-size: cover;
  background-repeat:no-repeat;
`;
export const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    width: 100%;
    display: flex;
    padding: 20px 50px;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        max-width: 180px;
        object-fit: contain;
      }
    }
    .signIn {
      button {
        padding: 7px 17px;
        background-color: #e50914;
        font-size: 1rem;
        border-radius: 3px;
        border: none;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 70%;
    h3 {
      font-size: 4rem;
      letter-spacing: 2px;
      text-align: center;
      width: 70%;
      margin-bottom: 20px;
    }
    h5 {
      font-size: clamp(1rem, 3vw - 0.5rem, 3rem);;
      text-align: center;
      width: 70%;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      width: 70%;
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
    form {
      display: flex;
      justify-content: center;

      .inputWrap {
        .input {
          position: relative;
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .is-valid {
          font-size: 0.8rem;
          top: 20%;
        }
        .error {
          color: yellow;
          margin-top: 10px;
        }
      }
      label {
        position: absolute;
        top: 50%;
        left: 20px;
        z-index: 11;
        color: #998383;
        transform: translateY(-50%);
        font-size: 1.2rem;
        transition: all 0.4s ease;
      }
      input {
        min-width: 450px;
        height: 60px !important;
        padding-left: 20px;
        font-size: 1rem;
        :focus {
          & ~ label {
            font-size: 0.8rem;
            top: 20%;
          }
        }
        :focus {
          outline: none;
        }
      }
      button {
        border-left: 1px solid #333;
        border: none;
        height: 60px !important;
        background-color: #e50914;
        min-width: 150px;
        padding: 0 20px;
        color: #fff;
        font-size: 1.5rem;
        letter-spacing: 2px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        i {
          margin-left: 10px;
        }
      }
    }
  }
`;
