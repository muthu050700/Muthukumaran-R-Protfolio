import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Body = ({ theme }) => {
  return (
    <div className={`${theme ? " bg-neutral-900 " : " bg-white"}`}>
      <Header theme={theme} />
      <Outlet />
      <Footer theme={theme} />
    </div>
  );
};
export default Body;
