import React, { useState } from "react";
import { empdata, activeuser } from "../utils/data";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  //   const [empdata, setEmpdata] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = empdata.find((user) => user.email === email);
    if (!existingUser) {
      const newUser = {
        username: name,
        password: password,
        history: [],
        currentsession: {
          isactive: false,
          clockin: "",
          clockout: "",
        },
      };

      //   setEmpdata([...empdata, newUser]);
      empdata.push(newUser);
      console.log(empdata);
      alert("Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
      setNumber("");
    } else {
      alert("User already exists.");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 min-h-96 p-4 flex flex-col items-center gap-5 justify-center border-2"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="USERNAME"
          className="border-2 px-3 py-2"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="PASSWORD"
          className="border-2 px-3 py-2"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="EMAIL"
          className="border-2 px-3 py-2"
        />

        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="NUMBER"
          className="border-2 px-3 py-2"
        />

        <div className="flex items-center justify-center gap-5">
          <button
            className="bg-cyan-600 px-4 py-2 text-white"
            onClick={() => navigate("/")}
          >
            LOGIN
          </button>

          <button className="bg-cyan-600 px-4 py-2 text-white" type="submit">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
