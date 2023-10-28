"use client";

import React from "react";
import Hidable from "./hidable/Hidable";
import Menu from "./Menubar";
import ButtonBar from "./PrintButton";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Menu />
        <ButtonBar />
      </div>
      <Background />
    </div>
  );
};

export default Home;
