import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { empdata } from "../utils/data";
import Header from "../components/Header";
import { GoClock } from "react-icons/go";

const ViewReport = () => {
  const { userId } = useParams();
  const [employeeHistory, setEmployeeHistory] = useState([]);

  useEffect(() => {
    if (userId) {
      const employee = empdata[parseInt(userId)];
      if (employee) {
        setEmployeeHistory(employee.history);
      }
    }
  }, [userId]);

  return (
    <div className="w-screen h-screen ">
      <Header title="Employee History" />

      <div className="container px-4 mx-auto mt-10">
        <div className="mx-auto p-6 pb-1 border max-w-[] bg-white rounded-md shadow-dashboard">
          <div className="flex flex-wrap">
            <div className="w-full border-b border-coolGray-100">
              {employeeHistory.map((historyItem, index) => (
                <div
                  className="flex flex-wrap items-center justify-between py-4 -m-2 "
                  key={index}
                >
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-md">
                          <GoClock className="text-2xl" />
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <h2 className="text-sm font-medium text-coolGray-900">
                          <p>Sign In: {historyItem.clockin}</p>
                        </h2>
                        <h2 className="text-sm font-medium text-coolGray-900">
                          <p>Sign In: {historyItem.clockout}</p>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <p className="text-xs text-coolGray-500 font-medium">
                      <p>{historyItem.date}</p>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
