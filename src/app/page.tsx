"use client"

import React from "react";
import Menu from "./Menubar";
import ButtonBar from "./PrintButton";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <>
      <head>
        <title>Portoforto</title>
        <link rel="icon" href="/paper-note.svg" /> 
      </head>
      <div>
        <Menu />
        <ButtonBar />
      </div>
      <Background />
    </>
  );
};

export default Home;