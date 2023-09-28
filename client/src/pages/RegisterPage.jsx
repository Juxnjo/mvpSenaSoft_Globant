import { RegisterFormComponent } from "../components/RegisterForm/RegisterFormComponent";

export const RegisterPage = () => {
  return (
    // PAGINA PARA REGISTRARSE
    <div className="flex h-screen items-center justify-center text-center ">
      <div className="font-Roboto text-white">
        <h1 className="text-3xl font-semibold ">REGISTER ON </h1>
        <h1 className="text-5xl text-semiLightBlue font-extrabold ">SAM</h1>
        <div className="">
          <RegisterFormComponent/>
        </div>
      </div>
      
    </div>
  )
}
