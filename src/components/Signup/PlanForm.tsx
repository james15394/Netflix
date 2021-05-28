import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { getPackage } from "../../features/user/userSlice";

interface Prop {
  label: string;
}
interface IFormValues {
  allplan: string;
}
const Container = styled.section<Prop>`
  display: grid;
  place-items: center;
  background: #fff;
  height: calc(100vh - 90px);
  .wrapper {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 20px 0;
    .step {
      margin-bottom: 10px;
      width: 100%;
      span {
        font-weight: 500;
      }
    }
    .title {
      font-size: 1.2rem;
      font-weight: 900;
      width: 100%;
      margin-bottom: 20px;
    }
    .item__wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;
      .item {
        margin-bottom: 10px;
      }
    }

    .plan__table {
      width: 100%;
      form {
        display: grid;
        place-items: center;
        button {
          border: none;
        }
      }
      .plan__detail {
        small {
          font-size: 0.8rem;
          :last-child {
            display: block;
            margin-top: 10px;
          }
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 20px;
        label[for="basic"] {
          color: ${(props) => (props.label === "basic" ? "#e50914" : "")};
        }
        label[for="standard"] {
          color: ${(props) => (props.label === "standard" ? "#e50914" : "")};
        }
        label[for="premium"] {
          color: ${(props) => (props.label === "premium" ? "#e50914" : "")};
        }
      }

      th {
        text-align: left;
        padding-left: 0.5rem;
        font-weight: 400;
      }
      td {
        text-align: center;
        padding: 0.8rem 2rem;
        font-weight: 700;
        color: #737373;
      }
      tr {
        border: 1px solid #999;
        border-left: none;
        border-right: none;
        :nth-child(2) {
          border-top: none;
        }
        :nth-child(1) {
          border: none;
          .plan {
            background: #fff;
            color: #232323;
            border-radius: 2px;
            font-size: 17px;
            width: 120px;
            height: 120px;
            input {
              display: none;
              :checked {
                & + label {
                  box-shadow: 0 0 3px 0 #e50914;
                  background: #e50914;
                  color: #fff;
                  border: none;
                  ::before {
                    position: absolute;
                    font-family: "Font Awesome\ 5 Free";
                    font-weight: 800;
                    font-size: 3rem;
                    content: "\f0d7 ";
                    bottom: -1.8rem;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #e50914;
                  }
                }
              }
            }
            label {
              width: 100%;
              height: 100%;
              display: grid;
              place-items: center;
              opacity: 1;
              background: #fff;
              color: #232323;
              border: 2px solid #c4c4c4;
              font-weight: 700;
              border-radius: 2px;
              font-size: 17px;
              position: relative;
            }
          }
        }
        :last-child {
          border-bottom: none;
        }
      }
    }
    .btn {
      min-width: 110px;
      background: #e50914;
      min-height: 48px;
      font-weight: 400;
      font-size: 17px;
      border-radius: 2px;
      width: 50%;
      color: #fff;
      display: grid;
      place-items: center;
      margin-top: 20px;
      cursor: pointer;
      outline-width: 0;
    }
  }
`;
const PlanForm = () => {
  const history = useHistory();
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({ defaultValues: { allplan: "standard" } });
  const watchPlan = watch("allplan");
  const onSubmit = (data: IFormValues) => {
    dispatch(getPackage(data.allplan));
    history.push("/seen/signup/payment");
  };
    useEffect(() => {
    radioRef.current?.focus();
  }, [watchPlan]);
  return (
    <Container label={watchPlan}>
      <motion.div
        className="wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="step">
          STEP <span>2</span> OF <span>3</span>
        </div>
        <div className="title">Choose the plan that’s right for you</div>
        <div className="item__wrap">
          <div className="item">Watch all you want. Ad-free.</div>
          <div className="item">Recommendations just for you.</div>
          <div className="item">Change or cancel your plan anytime.</div>
        </div>

        <div className="plan__table">
          <form onSubmit={handleSubmit(onSubmit)}>
            <table >
              <tbody>
                <tr>
                  <th colSpan={3}></th>
                  <td>
                    <div className="plan ">
                      <input
                        type="radio"
                        id="basic"
                        value="basic"
                        {...register("allplan")}
                      />
                      <label htmlFor="basic">Basic</label>
                    </div>
                  </td>
                  <td>
                    <div className="plan ">
                      <input
                        type="radio"
                        id="standard"
                        value="standard"
                        {...register("allplan")}
                        
                      />
                      <label htmlFor="standard">Standard</label>
                    </div>
                  </td>
                  <td>
                    <div className="plan ">
                      <input
                        type="radio"
                        id="premium"
                        value="premium"
                        {...register("allplan")}
                      />
                      <label htmlFor="premium">Premium</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Monthly price</th>
                  <td>
                    <label htmlFor="basic">180,000 ₫</label>
                  </td>
                  <td>
                    <label htmlFor="standard">220,000 ₫</label>
                  </td>
                  <td>
                    <label htmlFor="premium">260,000 ₫</label>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Video quality</th>
                  <td>
                    <label htmlFor="basic">Good</label>
                  </td>

                  <td>
                    <label htmlFor="standard">Better</label>
                  </td>

                  <td>
                    <label htmlFor="premium">Best</label>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Resolution</th>
                  <td>
                    <label htmlFor="basic">480p</label>
                  </td>
                  <td>
                    <label htmlFor="standard">1080p</label>
                  </td>
                  <td>
                    <label htmlFor="premium"> 4K + HDR</label>
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>
                    Watch on your TV, computer, mobile phone and tablet
                  </th>
                  <td>
                    <label htmlFor="basic">
                      <i className="fas fa-check"></i>
                    </label>
                  </td>
                  <td>
                    <label htmlFor="standard">
                      <i className="fas fa-check"></i>
                    </label>
                  </td>
                  <td>
                    <label htmlFor="premium">
                      <i className="fas fa-check"></i>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="plan__detail">
              <small>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our Terms of
                Use for more details.
              </small>
              <small>
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with Standard
                and 1 with Basic.
              </small>
            </div>
            <button type="submit" className="btn" ref={radioRef}>
              Continue
            </button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default PlanForm;
