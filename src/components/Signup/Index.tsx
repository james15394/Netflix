import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import Form1 from "./Form1";
import Home from "./Home";
import Intro from "./Intro";
import SignupHeader from "./SignupHeader";
import PlanForm from "./PlanForm";
import PaymentIntro from "./PaymentIntro";
import CreditOption from "./CreditOption";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <SignupHeader />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path={match.url}>
            <Home />
          </Route>
          <Route path={`${match.url}/registration`}>
            <Intro />
          </Route>
          <Route path={`${match.url}/regform`}>
            <Form1 />
          </Route>
          <Route path={`${match.url}/planform`}>
            <PlanForm />
          </Route>
          <Route path={`${match.url}/payment`}>
            <PaymentIntro />
          </Route>
          <Route path={`${match.url}/creditoption`}>
            <CreditOption />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Index;
