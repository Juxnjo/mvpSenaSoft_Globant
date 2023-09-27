import { SideBarComponent } from "../components/SideBar/SideBarComponent"



export const HomePage = () =>
{
  return (
    <>
      <SideBarComponent />

      <div className="h-screen py-10 sm:ml-0 pl-10 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
        <h1 className="font-bold text-4xl">Hola! Usuario</h1>

      </div>



      <div className="w-full flex justify-center">

      </div>

    </>
  )
}
