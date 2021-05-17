import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router as Router1, Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search/Search";
import Single from "./components/SingleF/Single";
import Tv from "./components/TV/Tv";
import Movie from "./components/Movie/Movie";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  getUser,
  logOut,
  paymentDone,
  selectUser,
} from "./features/user/userSlice";
import { auth } from "./firebase";
import Index1 from "./components/Home";
import ProtectedHome from "./components/ProtectedHome/ProtectedHome";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const App2: React.FC = () => {
  const [searchResult, setSearchResult] = useState<any>({});
  const dispatch = useAppDispatch();
  const paid = useAppSelector(paymentDone);
  const user = useAppSelector(selectUser);
  const authen = Boolean(paid) && Boolean(user);
  console.log(authen);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUser(user?.email));
      } else {
        dispatch(logOut());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <>
        {authen === true ? (
          <Router1 history={history}>
            <Header setSearchResult={setSearchResult} />
            <Switch>
              {searchResult && (
                <Route exact path="/search">
                  <Search searchResult={searchResult} />
                </Route>
              )}
              <Route path="/movie/:id">
                <Single />
              </Route>
              <Route exact path="/movie">
                <Movie />
              </Route>
              <Route exact path="/TV/list">
                <Tv />
              </Route>
              <Route path="/TV/list/:id">
                <Single />
              </Route>
              <Route exact path="/">
                <ProtectedHome />
              </Route>
            </Switch>
          </Router1>
        ) : (
          <Router1 history={history}>
            <Redirect exact to="/seen" />
            <Route path="/seen">
              <Index1 />
            </Route>
          </Router1>
        )}
      </>
    </div>
  );
};

export default App2;
