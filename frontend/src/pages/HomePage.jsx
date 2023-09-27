import { SideBarComponent } from "../components/SideBar/SideBarComponent"



export const HomePage = () => {
  return (
    <>

      <div className="py-10 sm:ml-0 pl-10 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
        <h1 className="font-bold text-4xl">Hola! Usuario</h1>
        <div className="hidden lg:block w-10 h-10 bg-semiLightBlue rounded-full">

        </div>
      </div>

      <SideBarComponent />

      <div className="w-full flex justify-center">
      
      </div>

    </>
  )
}
