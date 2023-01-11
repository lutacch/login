import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container  d-md-flex justify-content-md-end ">
      <Link to="/signup2">
              <button className="btn btn-primary  me-md-4">Signup 2</button>
            </Link>
	  <Link to="/signup">
              <button className="btn btn-success  me-md-4">Signup</button>
            </Link>
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
