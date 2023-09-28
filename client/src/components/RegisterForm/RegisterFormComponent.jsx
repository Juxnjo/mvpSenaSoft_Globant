import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const RegisterFormComponent = () =>
{
    const navigate = useNavigate()


    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
      
        const registerUrl = 'http://localhost:8000/api/register/';
      
        const data = {
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };
      
        fetch(registerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
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
