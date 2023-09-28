import SideBarComponent from "../components/SideBar/SideBarComponent";
import { Datatable } from "../components/TableDashboard/Datatable";

export const DashboardPage = () => {
  return (
    <>
    <SideBarComponent/>
<<<<<<< HEAD
    
    <div className="h-screen py-14 sm:ml-0 pl-16 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
        <h1 className="font-bold text-4xl">Hola! Usuario</h1>
        <span>dashboard</span>
      </div>
      <div className="w-full flex justify-center">
        
      </div>
=======

    <div className="flex justify-center items-center lg:ml-64">
      <h1 className="text-4xl text-white font-semibold pt-3">DASHBOARD</h1>
    </div>
    <div className="flex justify-center items-center lg:ml-64">
      
      <Datatable/>
    </div>
      
      

>>>>>>> 84308d1740116d97133d9e2affb790bcca5e7d5c
    </>
  )
}
