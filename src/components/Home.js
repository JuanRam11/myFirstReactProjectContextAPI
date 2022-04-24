import React, { Fragment } from "react";
import Alert from "./Alert";
import Search from "./Search";
import Users from "./Users";

const Home = () => {
  return (
    <Fragment>
      <Alert />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
