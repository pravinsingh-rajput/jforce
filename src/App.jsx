import React from "react";
import Login from "./pages/Login";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default App;
