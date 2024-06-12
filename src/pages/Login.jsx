import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { empdata, admindata, activeuser } from "../utils/data";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userActive, setUserActive] = useState(false);

  const navigate = useNavigate();

  console.log(empdata);

  const userValidation = () => {
    const isAdmin = admindata.some(
      (admin) => admin.username === username && admin.password === password
    );

    if (isAdmin) {
      setUserActive(true);
      activeuser.push(0);
      navigate("/admin");
    } else {
      for (let i = 0; i < empdata.length; i++) {
        if (
          empdata[i].username === username &&
          empdata[i].password === password
        ) {
          setUserActive(true);
          activeuser.push(i);
          navigate("/dashboard");
          break;
        }
      }
    }
  };

  const dashboardRedirect = (event) => {
    event.preventDefault();
    userValidation();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="max-w-96 min-h-96 p-4 flex flex-col items-center gap-5 justify-center border-2">
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border-2 px-3 py-2"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 px-3 py-2"
        />

        <div className="flex items-center justify-center gap-5">
          <button
            className="bg-cyan-600 px-4 py-2 text-white"
            onClick={(event) => dashboardRedirect(event)}
          >
            LOGIN
          </button>

          <button
            className="bg-cyan-600 px-4 py-2 text-white"
            onClick={(event) => navigate("/register")}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
