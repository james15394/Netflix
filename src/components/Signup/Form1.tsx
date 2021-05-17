import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import Input from "../FormField/Input";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser, selectUser } from "../../features/user/userSlice";
import { motion } from "framer-motion";

const IntroContainer = styled.section`
  .errors {
    background: #e87c03;
    padding: 15px 10px;
    border-radius: 3px;
    color: #fff;
    margin-bottom: 30px;
    position: relative;
    ::before {
      font-family: "Font Awesome\ 5 Free";
      font-weight: 800;
      content: "\f071 ";
      color: #fff;
      margin-right: 10px;
    }
  }
  display: grid;
  place-items: center;
  align-items: start;
  padding-top: 30px;
  background: #fff;
  height: calc(100vh - 90px);
  .intro__wrapper {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .step {
      margin-bottom: 10px;
      span {
        font-weight: 500;
      }
    }
    .title {
      margin-bottom: 20px;
      font-size: 23px;
      font-weight: 700;
    }
    .introduction {
      margin-bottom: 10px;
    }
    form {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      .btn {
        background: #f6121d;
        height: 48px;
        display: grid;
        place-items: center;
        font-size: 17px;
      }
      .input {
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.4);
        width: 100%;
        border-radius: 3px;
        margin: 10px 0;
        .is-valid {
          top: 20%;
          font-size: 0.7rem;
        }
        .is-inValid {
          border: 1px solid #f6121d;
        }
        label {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          padding-left: 10px;
          font-size: 1.2rem;
          transition: all 0.4s ease;
          pointer-events: none;
        }
      }
      input {
        width: 100%;
        height: 60px;
        font-size: 1rem;
        padding-left: 10px;
        :focus {
          & ~ label {
            top: 20%;
            font-size: 0.7rem;
          }
        }
      }
      .btn {
        background: #f6121d;
        border-radius: 3px;
        width: 100%;
        min-height: 48px;
        color: #fff;
        display: grid;
        place-items: center;
        margin-top: 20px;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
interface IFormValues {
  email: string;
  password: any;
}
const Form1 = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [error, setError] = useState<string>("");
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  const Schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        // eslint-disable-next-line
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onBlur",
    resolver: yupResolver(Schema),
    reValidateMode: "onBlur",
  });
  const onSubmit = (data: IFormValues) => {
    const { email, password } = data;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(getUser(userCredential.user?.email));
        history.push("/seen/signup");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <IntroContainer>
      <motion.div
        className="intro__wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        {error && <div className="errors">{error}</div>}
        <div className="step">
          STEP <span>1</span> OF <span>3</span>
        </div>

        <div className="title">Create a password to start your membership.</div>
        <div className="introduction">
          Just a few more steps and you're done! We hate paperwork, too.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            name="email"
            register={register}
            required
            errors={errors.email}
            ivalue={user}
            type="text"
          />
          <div className="error">{errors.email?.message}</div>
          <Input
            label="Add a password"
            register={register}
            required
            errors={errors.password}
            name="password"
            type="password"
          />
          <div className="error">{errors.password?.message}</div>
          <button className="btn" type="submit">
            Continue
          </button>
        </form>
      </motion.div>
    </IntroContainer>
  );
};

export default Form1;
