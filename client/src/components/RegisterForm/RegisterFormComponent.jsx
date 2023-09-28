import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// IMPORTAMOS LA LIBREARIA QUE NOS AYUDAN A CONSUMIR EL BACKEND DESDE EL FRONTEND

export const RegisterFormComponent = () =>
{
    const navigate = useNavigate()


  // CON LOS HOOKS DE REACT CAPTURAMOS LOS DATOS DEL FORMULARIO GUARDANDOLOS EN UNA CONSTANTE
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
          // QUITAMOS EL EVENTO POR DEFECTO DE UN FORM
        event.preventDefault();



        // API A CONSUMIR CON EL METODO REGISTER
        const registerUrl = 'http://localhost:8000/api/register/';

      // GUARDAMOS LOS DATOS DENTRO DE CONSTANTE PARA TENERLOS EN FORMATO JSON

        const data = {
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };

        // CON FETH HACEMOS PETICIONES HTTP AL SERVIDOR

        fetch(registerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        // MANEJAMOS LOS POSIBLES CASOS Y VALIDACIONES PARA ACCDER A LAS VITAS DESDE EL FRONTEND
          .then((response) => {
            if (response.ok) {
              navigate('/login');
              alert("Successfully registered. Please sign in.")
              return response.json();
            } else {
              console.log("Register error");
              alert("Register error");
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
            <form onSubmit={handleRegister}>

            {/* ONSUBMIT NOS PERMITE EJECUTAR LA FUCNCION QUE TRAE ESOS DATOS */}

                <input
                type="number"
                className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  '
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required />


                <input
                type="email"
                className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  '
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

                <input
                type="text"
                className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  '
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required />

                <input
                type="text"
                className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  '
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required />

                <input
                type="password"
                className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />

                <button type='submit' className='bg-semiDarkBlue w-3/4 hover:bg-semiLightBlue text-white font-semibold my-2 py-2 px-4 rounded-md'>Sign in</button>
            </form>
            <div>
                <p>Already have an account? <Link to='/login' className="text-lightBlue">Log in.</Link></p>
            </div>
        </>
    )
}
