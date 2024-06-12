import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { empdata, activeuser } from "../utils/data";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [isSessionActive, setIsSessionActive] = useState(false);

  const now = new Date();

  useEffect(() => {
    const currentUserIndex = activeuser[0];
    if (currentUserIndex !== undefined) {
      setUserData(empdata[currentUserIndex]);
      setIsSessionActive(userData?.currentsession?.isactive ?? false);
    }
  }, []);

  const handleToggleSession = () => {
    const currentTime = new Date().toLocaleTimeString();
    setDisplayText(currentTime);
    setUserData((prevState) => ({
      ...prevState,
      currentsession: {
        ...prevState.currentsession,
        isactive: !prevState.currentsession.isactive,
        clockin: !prevState.currentsession.isactive ? currentTime : "",
        clockout: prevState.currentsession.isactive ? currentTime : "",
      },
    }));
    setIsSessionActive(!isSessionActive);
  };

  return (
    <div className="space-y-10">
      <h2 className="text-4xl w-full text-center">Dashboard</h2>

      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-lg">{new Date().toLocaleDateString()}</div>
        {displayText && (
          <div className="text-lg">
            {displayText} {now.getHours > 12 ? "PM" : "AM"}
          </div>
        )}
      </div>

      <div className="flex items-center gap-5 flex-col">
        <button
          className="bg-cyan-600 px-4 py-2 text-white"
          onClick={handleToggleSession}
        >
          {isSessionActive ? "SIGN OUT" : "SIGN IN"}
        </button>
        <button className="bg-cyan-600 px-4 py-2 text-white">
          {activeuser.length > 0 && (
            <Link to={`/view-report/${activeuser[0]}`}>VIEW REPORT</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
