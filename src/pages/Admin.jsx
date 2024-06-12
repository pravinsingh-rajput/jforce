import React from "react";
import { empdata } from "../utils/data";

const Admin = () => {
  return (
    <div className="w-screen h-screen p-4 ">
      <h1 className="text-2xl text-center">Admin Dashboard</h1>

      <ul className="mt-10 w-full flex items-center  flex-col ">
        {empdata.map((item, index) => (
          <li key={index} className="capitalize border-2 w-3/4 p-4">
            {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
