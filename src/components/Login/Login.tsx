import React, { useState } from "react";
import { LoginContainer, LoginWrapper } from "./Login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../FormField/Input";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../app/hooks";
import { paidStatus } from "../../features/user/userSlice";

interface IFormValues {
  emailOrPhoneNumber: string;
  password: any;
}

const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const Schema = yup.object().shape({
    emailOrPhoneNumber: yup
      .mixed()
      .required("Email/Phone Number is required")
      .test(
        "test-name",
        "Enter Valid phone number/Email",
        function (value: string) {
          const emailRegex =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
          let isValidEmail = emailRegex.test(value);
          let isValidPhone = phoneRegex.test(value);
          if (!isValidEmail && !isValidPhone) {
            return false;
          }
          return true;
        }
      ),
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
    mode: "all",
    resolver: yupResolver(Schema),
    reValidateMode: "onBlur",
  });
  const onSubmit = (data: IFormValues) => {
    const { emailOrPhoneNumber, password } = data;
    auth
      .signInWithEmailAndPassword(emailOrPhoneNumber, password)
      .then((userCredential) => {
        dispatch(paidStatus());
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  return (
    <LoginContainer>
      <div className="login__header">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="logo"
        />
      </div>
      <LoginWrapper>
        <div className="login__content">
          <h3>Sign in</h3>
          {error && (
            <div className="submiterror">
              Sorry, we can't find an account with this email address. Please
              try again or{" "}
              <span onClick={() => history.push("/seen")}>
                create a new account.
              </span>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email or Phone number"
              name="emailOrPhoneNumber"
              register={register}
              required
              errors={errors.emailOrPhoneNumber}
              type="text"
            />
            <div className="error">{errors.emailOrPhoneNumber?.message}</div>
            <Input
              label="Password"
              register={register}
              required
              errors={errors.password}
              name="password"
              type="password"
            />
            <div className="error">{errors.password?.message}</div>
            <button type="submit">Sign in</button>
          </form>
          <div className="login__help">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="Remember me"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>Need help?</div>
          </div>
          <div className="login__other">
            <div className="fbLogin">
              <i className="fab fa-facebook-square"></i>
              Login with Facebook
            </div>
            <div className="signUp">
              New to Netflix ?{" "}
              <span onClick={() => history.push("/seen")}>Sign up now</span>
            </div>
            <div className="info">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </div>
          </div>
        </div>
      </LoginWrapper>
      <div className="login__footer">
        <div className="item">
          <div className="el">Questions? Contact us.</div>
          <div className="el">FAQ</div>
          <div className="el">Cookie Preferences</div>
          <div className="el">
            <i className="fas fa-globe"></i>
            <h5>English</h5>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="item">
          <div className="el">Help Center</div>
          <div className="el">Corporate Information</div>
        </div>
        <div className="item">
          <div className="el">Terms of Use</div>
        </div>
        <div className="item">
          <div className="el">Privacy</div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
