import React from "react";

import { Link } from "react-router-dom";

export const Single = () => {
  return (
    <div>
      <h1 className="text-center">Te has logueado con exito</h1>

      <Link to="/">
        <span className="d-grid d-md-flex justify-content-center" href="#" role="button">
          <button className="btn btn-warning ">
            Back home
          </button>
        </span>
      </Link>
    </div>
  );
};
