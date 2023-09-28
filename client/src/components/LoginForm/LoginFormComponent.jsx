import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginFormComponent = () => {

  // EN ESTE COMPONENTE VALIDAMOS EL LOGIN Y EL INCIO DE SESSION 



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // CONSULTA A LA API

    const loginUrl = "http://localhost:8000/api/login/";

  // GUARDAR REGUSTROS EN DATA

    const data = {
      username: username,
      password: password,
    };

    // HACEMOS LA SOLICITUD AL BACK Y ESPERAMOS LA RESPUESTA DEPENDIENDO DE QUE SI ES CORRECTO 

    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            const role = data.role;
            if (role === "Admin") {

              navigate("/dashboard");
            } else {
              navigate("/ticket");
            }
            console.log(data);
          });
        } else {
          console.log("Credenciales incorrectas");
          alert("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })};

  return (
    <>
      <form onSubmit={handleLogin }>
        <input
          type="text"
          className="w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200   px-4 py-2 rounded-md my-2  "
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />

        <input
          type="password"
          className="w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200   px-4 py-2 rounded-md my-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          {...register("password ")}
        />

        <button
          type="submit"
          className="bg-semiDarkBlue w-3/4 hover:bg-semiLightBlue text-white font-semibold my-2 py-2 px-4 rounded-md"
        >
          Log in
        </button>
      </form>
      <div>
        <p>
          Don't you have an account?{" "}
          <Link to="/register" className="text-lightBlue">
            Sign up.
          </Link>
        </p>
      </div>
    </>
  );
};
