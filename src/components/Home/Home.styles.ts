import styled from "styled-components";

export const HomeContainer = styled.section`
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/71cfa010-f8dd-4298-a94d-1ae5034a857c/bb3f65e5-fca2-41b0-80b7-d28f1d429edd/VN-en-20210425-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  background-position: center;
  background-size: cover;
  background-repeat:no-repeat;
    height: 100vh;
`;
export const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    height: 100%;
  overflow: hidden;
  padding: 30px 50px;
  @media (max-width: 700px) {
    padding: 0 20px;
  }
  @media (max-width: 530px) {
    padding: 0;
  }
  .header {
    width: 100%;
    display: flex;
        height: 10vh;
    @media (max-width: 550px) {
      padding: 20px;
    }
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        max-width: 180px;
        object-fit: contain;
                @media (max-width: 650px) {
          max-width: 150px;
        }
        @media (max-width: 450px) {
          max-width: 110px;
        }
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
    width: 60%;
        @media (max-width: 870px) {
      width: 90%;
    }

    height: 80vh;
    overflow: hidden;
    h3 {
      font-size: clamp(1.5rem, 0.7727rem + 3.2323vw, 3.5rem);
      letter-spacing: 2px;
      text-align: center;
      width: 80%;
      margin-bottom: 20px;
    }
    h5 {
      font-size: clamp(1rem, 0.6364rem + 1.6162vw, 2rem);
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
      font-size: clamp(0.5rem, 0.2091rem + 1.2929vw, 1.3rem);
    }
    form {
      display: flex;
      justify-content: center;
      width: 100%;
      .inputWrap {
      width: 100%;
        .input {
          position: relative;
          width: 100%;
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
        width: 100%;
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
        @media (max-width: 570px) {
          display: none;
        }
        i {
          margin-left: 10px;
        }
      }
    }
  }
`;
