import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Inside = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <div className="text-center mt-5">
		<h3>You are succesfully loged in</h3>
      <h1>{store.email}</h1>
    </div>
  );
};
