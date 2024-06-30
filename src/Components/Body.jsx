import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
const Body = ({ theme }) => {
  return (
    <div className={`${theme ? " bg-neutral-900 " : " bg-white"}`}>
      <Header theme={theme} />
      {/* <Home />
      <About />
      <Resume /> */}
      <Outlet dark={"dark"} />
    </div>
  );
};
export default Body;
