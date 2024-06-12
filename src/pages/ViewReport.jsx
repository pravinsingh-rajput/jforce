import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { empdata } from "../utils/data";

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
    <div className="w-screen h-screen p-4 ">
      <h1 className="text-2xl text-center">Employee History</h1>
      <ul className="mt-10 w-full flex items-center  flex-col ">
        {employeeHistory.map((historyItem, index) => (
          <li key={index} className="capitalize border-2 w-3/4 p-4">
            <p>{historyItem.date}</p>

            <p>Sign In: {historyItem.clockin}</p>
            <p>Sign Out: {historyItem.clockout}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReport;
