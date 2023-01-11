import React, { Fragment, useState } from "react";

const SignUp2 = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.email + " " + datos.password);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://3001-lutacch-login-mlv5tln6dns.ws-eu81.gitpod.io/api/signup2",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <h1 className="text-center">Sign Up User</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="formulario" onSubmit={enviarDatos}>
          <div className="">
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="form-control"
              onChange={handleInputChange}
              name="email"
            ></input>
          </div>
          <div className="">
            <input
              id="password"
              type="text"
              placeholder="Password"
              className="form-control"
              onChange={handleInputChange}
              name="password"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
