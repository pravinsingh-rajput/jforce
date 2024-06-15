import React from "react";
import { Link } from "react-router-dom";
import { empdata } from "../utils/data";
import { FaRegUser } from "react-icons/fa";
import Header from "../components/Header";

const Admin = () => {
  return (
    <div className="w-screen h-screen ">
      <Header title="Admin Dashboard" />

      <div className="container px-4 mx-auto mt-10">
        <div className="mx-auto p-6 pb-1 border max-w-[600px] bg-white rounded-md shadow-dashboard">
          <div className="flex flex-wrap ">
            <div className="w-full border-b border-coolGray-100">
              {empdata.map((item, index) => (
                <div
                  className="flex flex-wrap items-center justify-between py-4 -m-2"
                  key={index}
                >
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-md">
                          <FaRegUser className="text-2xl" />
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h2 className="text-sm font-medium text-coolGray-900 capitalize">
                          {item.username}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <Link to={`/view-report/${index}`} className="cursor-pointer">
                    View History
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
