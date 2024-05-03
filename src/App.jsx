/* eslint-disable no-unused-vars */
import React from "react";
import Page01 from "./components/Page01";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div>
      <Page01 />
      <Page01 />
      <Page01 />
    </div>
  );
};

export default App;
