import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = ({ theme }) => {
  return (
    <div className={`${theme ? " bg-neutral-900 " : " bg-white"}`}>
      <Header theme={theme} />
      <Outlet />
    </div>
  );
};
export default Body;
