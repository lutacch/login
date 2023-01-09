import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleClick = () => {
    if(actions.login(email, password))
    navigate("/")
  
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button onClick={handleClick}>Login</button>{" "}
        </div>
      )}
    </div>
  );
};
