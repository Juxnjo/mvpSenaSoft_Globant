import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginFormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const loginUrl = "http://localhost:8000/api/login/";

    const data = {
      username: username,
      password: password,
    };

    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          if (response.role === "Admin") {
            navigate("/dashboard");
            return response.json();
          }
          else {
            navigate("/ticket")
            return response.json();
          }
        } else {
          console.log("Credenciales incorrectas");
          alert("Credenciales incorrectas");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
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
