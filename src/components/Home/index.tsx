import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Login from "../Login/Login";
import Index from "../Signup/Index";
import Home from "./Home";

const Index1 = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url}>
          <Home />
        </Route>
        <Route exact path={`${match.url}/login`}>
          <Login />
        </Route>
        <Route path={`${match.url}/signup`}>
          <Index />
        </Route>
      </Switch>
    </>
  );
};

export default Index1;
