import { Link } from "react-router-dom";

export const RegisterFormComponent = () =>
{
    return (
        <>
            <form action="">
                <input type="email" className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  ' placeholder="Email" required />

                <input type="text" className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2  ' placeholder="Username" required />

                <input type="password" className='w-3/4 bg-white bg-opacity-20 placeholder:text-white border- border-gray-200 px-4 py-2 rounded-md my-2' placeholder="Password" required />

                <button type='submit' className='bg-semiDarkBlue w-3/4 hover:bg-semiLightBlue text-white font-semibold my-2 py-2 px-4 rounded-md'>Sign in</button>
            </form>
            <div>
                <p>Already have an account? <Link to='/' className="text-lightBlue">Log in.</Link></p>
            </div>
        </>
    )
}
