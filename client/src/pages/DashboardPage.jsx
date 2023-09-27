import { SideBarComponent } from "../components/SideBar/SideBarComponent";
import { Datatable } from "../components/TableDashboard/Datatable";

export const DashboardPage = () =>
{
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <SideBarComponent/>
      <Datatable/>
      
    </div>
  )
}
