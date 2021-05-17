import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { HeroSection, HomeContainer } from "./Home.styles";
import * as yup from "yup";
import Input from "../FormField/Input";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../features/user/userSlice";

interface IFormValues {
  email: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const Schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid Email"),
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
    dispatch(getUser(data.email));
    history.push("/seen/signup/registration");
  };
  return (
    <HomeContainer>
      <HeroSection>
        <div className="header">
          <div className="logo">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="logo"
            />
          </div>
          <div className="signIn">
            <button onClick={() => history.push("/seen/login")}>Sign in</button>
          </div>
        </div>
        <div className="content">
          <h3>Unlimited movies, TV shows, and more.</h3>
          <h5>Watch anywhere. Cancel anytime.</h5>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputWrap">
              <Input
                label="Email"
                name="email"
                register={register}
                required
                errors={errors.email}
                type="text"
              />
              <div className="error">{errors.email?.message}</div>
            </div>

            <button type="submit">
              Get started <i className="fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
