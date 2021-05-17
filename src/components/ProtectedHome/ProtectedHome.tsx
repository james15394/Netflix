import React from "react";
import { withRouter } from "react-router";
import requests from "../../api/Request";
import Hero from "../Hero/Hero";
import Row from "../Row/Row";

const ProtectedHome = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Row
          name="Popular movies"
          data={requests.fetchPopularMovie}
          large={true}
        />
        <Row
          name="latest & trending movies"
          data={requests.fetchTrending}
          large={false}
        />
        <Row
          name="top rated series for you"
          data={requests.fetchTopRated}
          large={false}
        />
      </div>
    </div>
  );
};

export default withRouter(ProtectedHome);
