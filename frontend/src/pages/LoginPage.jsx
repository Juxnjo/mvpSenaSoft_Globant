import { LoginFormComponent } from "../components/LoginForm/LoginFormComponent";

export const LoginPage = () =>
{
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center text-center">
      <div className="font-Roboto text-white">
        <h1 className="text-3xl font-semibold ">WELCOME TO </h1>
        <h1 className="text-4xl text-semiLightBlue font-extrabold ">SAM</h1>
        <div className="">
        <LoginFormComponent />
        </div>
      </div>
      
    </div>
  )
}
