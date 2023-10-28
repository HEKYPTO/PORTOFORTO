"use client";

import React from "react";
import Menu from "./Menubar";
import ButtonBar from "./PrintButton";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <>
      <title>Portoforto</title>
      <div>
        <Menu />
        <ButtonBar />
      </div>
      <Background />
    </>
  );
};

export default Home;
