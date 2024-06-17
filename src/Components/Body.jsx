import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
const Body = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
};
export default Body;
