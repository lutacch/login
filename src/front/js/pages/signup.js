import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleClick = () => {
    if(actions.signup(email, password))
    navigate("/inside")
  
  };

  return (
    <div className="text-center mt-5">
      <h1>Sign Up</h1>

  
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
          <button onClick={handleClick}>SignUp</button>{" "}
        </div>
    
    </div>
  );
};
