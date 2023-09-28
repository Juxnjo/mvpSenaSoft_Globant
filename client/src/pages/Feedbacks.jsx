import SideBarComponent from "../components/SideBar/SideBarComponent";
import FollowUpDatatable from "../components/FollowUpDatatable/FollowUpDatatable";

const Feedbacks = () => {
  return (
    <>
    <SideBarComponent/>
    <div className="flex justify-center items-center lg:ml-64">
      <h1 className="text-4xl text-white font-semibold pt-3">Feedbacks</h1>
    </div>
    <div className="flex justify-center items-center lg:ml-64">
      
      <FollowUpDatatable/>
    </div>
      
      
    </>
  )
}

export default Feedbacks