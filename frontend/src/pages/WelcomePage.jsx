import { Link } from "react-router-dom";

export const WelcomePage = () =>
{
    return (
        <div className="flex h-screen items-center justify-center text-center ">
            <div className="font-Roboto text-white ">
                <div className="backdrop-blur-xl bg-white/20 m-4 p-10 rounded-xl shadow-lg shadow-darkBlue">
                    <h1 className="text-4xl  font-extrabold  "><span className="text-lightBlue ">Student</span> <span className="text-semiLightBlue">Asset</span> <span className="text-darkBlue">Management</span></h1>
                    <div className="space-x-1">
                        <Link to="/login" type='submit' className='bg-lightBlue w-2/4 hover:bg-semiLightBlue text-darkBlue font-semibold my-2 py-2 px-4 rounded-md'>Log in</Link>
                        <Link to="/register" type='submit' className='bg-darkBlue w-2/4 hover:bg-semiLightBlue text-white font-semibold my-2 py-2 px-4 rounded-md'>Sign in</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
