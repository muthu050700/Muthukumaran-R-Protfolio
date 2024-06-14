import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
const Body = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Outlet />
    </>
  );
};
export default Body;
