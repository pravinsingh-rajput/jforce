import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { empdata, activeuser } from "../utils/data";
import Header from "../components/Header";
import { GoClock } from "react-icons/go";

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

    // Create a deep copy of the userData object to avoid mutating the original state directly
    const updatedUserData = JSON.parse(JSON.stringify(userData));

    // Update the history based on the session status change
    if (!updatedUserData.currentsession.isactive) {
      // Assuming the active user index is stored in activeuser[0]
      const currentUserIndex = activeuser[0];
      if (currentUserIndex !== undefined) {
        // Clone the history array to avoid direct mutation
        const updatedHistory = [...updatedUserData.history];

        // Add a new entry to the history with today's date, clockin, and clockout times
        updatedHistory.push({
          date: new Date().toLocaleDateString(),
          clockin: currentTime,
          clockout: currentTime,
        });

        // Update the history in the copied userData object
        updatedUserData.history = updatedHistory;
      }
    }

    // Toggle the session status
    updatedUserData.currentsession = {
      ...updatedUserData.currentsession,
      isactive: !updatedUserData.currentsession.isactive,
      clockin: !updatedUserData.currentsession.isactive ? currentTime : "",
      clockout: updatedUserData.currentsession.isactive ? currentTime : "",
    };

    // Set the updated userData as the new state
    setUserData(updatedUserData);
    setIsSessionActive(!isSessionActive);

    console.log(updatedUserData); // Log the updated user data to verify the changes
  };

  return (
    <div className="space-y-10">
      <Header title={"DASHBOARD"} />

      <div className="inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-600 sm:mx-0 sm:h-10 sm:w-10">
                  <GoClock className="text-3xl text-white" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    id="modal-title"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Start Your Session
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <div className="text-lg">
                        <span className="font-semibold text-black">Today:</span>{" "}
                        {new Date().toLocaleDateString()}
                      </div>
                      {displayText && (
                        <div className="text-lg mt-6">
                          {displayText} {now.getHours > 12 ? "PM" : "AM"}
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                type="button"
                onClick={handleToggleSession}
              >
                {isSessionActive ? "SIGN OUT" : "SIGN IN"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:flex items-center  justify-center sm:px-6">
        {activeuser.length > 0 && (
          <Link
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            to={`/view-report/${activeuser[0]}`}
          >
            VIEW REPORT
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
