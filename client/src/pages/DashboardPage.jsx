import SideBarComponent from "../components/SideBar/SideBarComponent";
import { Datatable } from "../components/TableDashboard/Datatable";

export const DashboardPage = () => {
  return (
    <>
    <SideBarComponent/>
    
    <div className="h-screen py-14 sm:ml-0 pl-16 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
        <h1 className="font-bold text-4xl">Hola! Usuario</h1>
        <span>dashboard</span>
        <div className="w-full flex">
        <Datatable/>
      </div>
      </div>
      
    </>
  )
}
