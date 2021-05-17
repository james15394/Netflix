import styled from "styled-components";

export const LoginContainer = styled.section`
  .login__header {
    width: 100%;
    padding: 30px;
    img {
      width: 180px;
    }
  }
    .login__footer {
    width: 100%;
    padding: 20px 150px;
    min-height: 300px;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255,255,255,0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      .el {
        margin-bottom: 20px;
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      :nth-child(1) {
        .el {
          :nth-child(1) {
            font-size: 1rem;
          }
          :nth-child(4) {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 120px;
            border: 0.5px solid rgba(255,255,255,0.5);
            padding: 10px;
            :hover {
            text-decoration: none;
            }
            h5 {
              margin: 0 10px;
              font-size: 0.8rem
            }
          }
        }
      }
    }
  }
display:grid;
place-items: center;
background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/71cfa010-f8dd-4298-a94d-1ae5034a857c/bb3f65e5-fca2-41b0-80b7-d28f1d429edd/VN-en-20210425-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  );
  background-position: center;
  background-size: cover;
  background-repeat:no-repeat; 
  min-height: 100vh;
  width: 100%;

  `;
export const LoginWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login__content {
    flex: 2;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    padding: 60px 68px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 90px;
    min-height: 660px;
    h3 {
      color: #fff;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    .submiterror {
      background: #e87c03;
      padding: 10px 20px;
      border-radius: 3px;
      color: #fff;
      margin-bottom: 10px;
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        border: none;
        -webkit-text-fill-color: #fff;
        -webkit-box-shadow: 0 0 0 #333333;
        transition: background-color 5000s ease-in-out 0s;
      }
      .error {
        color: #e50914;
        font-size: 0.8rem;
        width: 100%;
      }
      .input {
        border-radius: 4px;
        position: relative;
        margin: 10px 0;

        .is-invalid {
          border-bottom: 2.5px solid #e29238 !important;
        }
        .is-valid {
          font-size: 0.7rem;
          top: 40%;
        }
        label {
          position: absolute;
          top: 70%;
          left: 0;
          padding-left: 20px;
          transform: translateY(-100%);
          color: rgba(255, 255, 255, 0.4);
          transition: all 0.4s ease;
          pointer-events: none;
        }
        input {
          padding: 16px 20px 0;
          height: 50px;
          border: none;
          background: #333333;
          width: 300px;
          border-radius: 4px;
          color: #fff;
          font-size: 1rem;

          :focus {
            outline: none;
            & ~ label {
              font-size: 0.7rem;
              top: 40%;
            }
          }
        }
      }
      button {
        width: 100%;
        padding: 16px 20px 0;
        height: 50px;
        margin-top: 30px;
        background: #e50914;
        color: #fff;
        border: none;
        font-size: 1rem;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }
    .login__help {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.8rem;
      width: 100%;
      margin-top: 10px;
      div {
        :nth-child(1) {
          display: flex;
          align-items: center;
          label {
            margin-left: 5px;
          }
        }
      }
    }
    .login__other {
      width: 100%;
      color: rgba(255, 255, 255, 0.3);
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .signUp {
        margin: 20px 0;
        span {
          color: #fff;
          cursor: pointer;
        }
      }
      .fbLogin {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        i {
          color: #3b579d;
          margin-right: 10px;
          font-size: 1.2rem;
        }
      }
      .info {
        font-size: 0.8rem;
        span {
          color: blue;
        }
      }
    }
  }
`;
