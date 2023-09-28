import SideBarComponent from "../components/SideBar/SideBarComponent";
import { Datatable } from "../components/TableDashboard/Datatable";

export const DashboardPage = () => {
  return (
    <>
    <SideBarComponent/>

    <div className="flex justify-center items-center lg:ml-64">
      <h1 className="text-4xl text-white font-semibold pt-3">DASHBOARD</h1>
    </div>
    <div className="flex justify-center items-center lg:ml-64">
      {/* TABLA COMPONENTE  */}
      <Datatable/>
    </div>
      
      

    </>
  )
}
