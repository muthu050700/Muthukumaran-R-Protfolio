import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
const Body = () => {
  return (
    <>
      <Header />
      {/* <Home />
      <About />
      <Resume /> */}
      <Outlet />
    </>
  );
};
export default Body;
