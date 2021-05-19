import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../FormField/Input";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { paidStatus, selectPackage } from "../../features/user/userSlice";
import { history } from "../../App2";
import { motion } from "framer-motion";

const Container = styled.section`
  display: grid;
  place-items: center;
  align-items: start;
  background: #fff;
  min-height: calc(100vh - 90px);
  padding: 30px 0;
  .intro__wrapper {
    width: 450px;
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .step {
      margin-bottom: 5px;
      width: 100%;
      span {
        font-weight: 600;
      }
    }
    .title {
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 1.5rem;
      width: 100%;
    }
    .card {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;
      .imgContainer {
        max-width: 30px;
        margin: 0 5px;
        img {
          width: 100%;
        }
      }
    }
    .formField {
      form {
        width: 100%;
        .errors {
          margin: 5px 0;
          font-size: 0.8rem;
          color: red;
        }
        .input {
          width: 100%;
          position: relative;
          margin: 5px 0;
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            border: 1px solid rgb(30 26 26 / 20%);;
            -webkit-text-fill-color: #000;
            -webkit-box-shadow: 0 0 0 #fff;
            transition: background-color 5000s ease-in-out 0s;
          }
          .is-valid {
            top: 20%;
            font-size: 0.7rem;
          }
          .is-invalid {
            border: 1px solid #f6121d;
          }
          input {
            width: 100%;
            padding: 20px;
            border: 1px solid rgb(30 26 26 / 20%);
            border-radius: 3px;
            font-size: 1rem;
            height: 60px;
            :focus {
              outline: none;
              box-shadow: 0 0 0 0.8px blue;
              & ~ label {
                top: 20%;
                font-size: 0.7rem;
              }
            }
          }
          label {
            position: absolute;
            transition: all 0.4s ease;
            top: 50%;
            transform: translateY(-50%);
            left: 10px;
            color: rgb(10 9 9 / 78%);
            font-size: 1rem;
            pointer-events: none;
          }
        }
        .plan {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          width: 100%;
          margin-bottom: 20px;
          background: #f4f4f4;
          border-radius: 3px;
          .left {
            display: flex;
            flex-direction: column;
          }
          .right {
            color: #0071eb;
            font-weight: 700;
            cursor: pointer;
            :hover {
              text-decoration: underline;
            }
          }
        }
        .info1 {
          color: rgb(10 9 9 / 78%);
          margin-bottom: 40px;
          font-size: 0.8rem;
        }
        .info2 {
          color: rgb(10 9 9 / 78%);
          font-size: 0.8rem;
          margin-bottom: 10px;
        }
        .tick {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          color: rgb(10 9 9 / 78%);
          margin-bottom: 40px;
          justify-content: flex-start;
      
          .inputCheckbox {
            display: flex;
           
          }
          input[type="checkbox"] {
            padding: 10px;
            -webkit-appearance: none;
            border: 1px solid rgb(30 26 26 / 20%);
            position: relative;
            :checked {
              border: 1px solid #0071eb;
            ::after{
            position: absolute;
            font-family: 'Font Awesome\ 5 Free';
            font-weight: 800;
            content: "\f00c ";
            top: 50%;
            transform: translateY(-50%);
            left: 3px;
            color: #0071eb;
            z-index: 100;
            font-size: 14px;}
            }
          }
          }
          label {
            margin-left: 10px;
          }
        }
        input[type="submit"] {
          width: 100%;
          background: #f6121d;
          border-radius: 3px;
          color: #fff;
          min-height: 48px;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
        }
      }
    }
  }
`;
interface IFormValues {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDay: string;
  securityCode: string;
  checked: boolean;
}
const CreditOption = () => {
  const dispatch = useAppDispatch();
  const currentPackage = useAppSelector(selectPackage);
  const Schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string(),
    cardNumber: yup.string().required("Card number is required"),
    expiryDay: yup.string().required("Expiry date is required"),
    securityCode: yup.string().required("Required"),
    checked: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
  });
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "all",
    resolver: yupResolver(Schema),
    reValidateMode: "onBlur",
  });
  const onSubmit = (data: IFormValues) => {
    try {
      dispatch(paidStatus());
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <motion.div
        className="intro__wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="step">
          STEP <span>3</span> OF <span>3</span>{" "}
        </div>
        <div className="title">Set up your credit or debit card.</div>
        <div className="card">
          <div className="imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
              alt="visa"
            />
          </div>
          <div className="imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
              alt="mastercard"
            />
          </div>
          <div className="imgContainer">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
              alt="american express"
            />
          </div>
        </div>
        <div className="formField">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="First Name"
              required
              type="text"
              register={register}
              errors={errors.firstName}
              name="firstName"
            />
            <div className="errors">{errors.firstName?.message}</div>
            <Input
              label="Last Name"
              required
              type="text"
              register={register}
              errors={errors.lastName}
              name="lastName"
            />
            <Input
              label="Card Number"
              required
              type="text"
              register={register}
              errors={errors.cardNumber}
              name="cardNumber"
            />
            <div className="errors">{errors.cardNumber?.message}</div>

            <Input
              label="Expiry Date (MM/YY)"
              required
              type="text"
              register={register}
              errors={errors.expiryDay}
              name="expiryDay"
            />
            <div className="errors">{errors.expiryDay?.message}</div>

            <Input
              label="Security Code"
              required
              type="text"
              register={register}
              errors={errors.securityCode}
              name="securityCode"
            />
            <div className="errors">{errors.securityCode?.message}</div>

            <div className="plan">
              <div className="left">
                <h3> {currentPackage === "basic"
                    ? "180,000đ"
                    : currentPackage === "standard"
                    ? "220,000đ"
                    : "260,000đ"}{" "}
                  /month</h3>
                <p>{currentPackage} Plan</p>
              </div>
              <div
                className="right"
                onClick={() => history.push("/seen/signup/planform")}
              >
                Change
              </div>
            </div>
            <div className="info1">
              Your payments will be processed internationally. Additional bank
              fees may apply.
            </div>
            <div className="info2">
              By checking the checkbox below, you agree to our Terms of Use,
              Privacy Statement, and that you are over 18. Netflix will
              automatically continue your membership and charge the monthly
              membership fee (currently 180,000 ₫) to your payment method until
              you cancel. You may cancel at any time to avoid future charges.
            </div>
            <div className="tick">
              <div className="inputCheckbox">
                <input type="checkbox" id="agree" {...register("checked")} />
                <label htmlFor="agree">I agree</label>
              </div>

              <div className="errors">{errors.checked?.message}</div>
            </div>
            <input type="submit" value="Start membership" />
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default CreditOption;
