import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full justify-center ">
        <div className="w-full  flex-col flex justify-center items-center">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
