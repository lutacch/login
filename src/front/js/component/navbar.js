import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container  d-md-flex justify-content-md-end">
        <div className="ml-auto">
          {!store.token ? (
            <Link to="/login">
              <button className="btn btn-danger">Log In</button>
            </Link>
          ) : (
            <button
              onClick={() => {
                actions.logout();
              }}
              className="btn btn-danger"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};