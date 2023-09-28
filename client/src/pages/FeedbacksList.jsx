import FeedbacksDatatable from "../components/FeedbacksDataTable/FeedbacksDatatable"
import SideBarComponent from "../components/SideBar/SideBarComponent"

const FeedbacksList = () => {
  return (
    <>
    <SideBarComponent/>
    <div className="flex justify-center items-center lg:ml-64">
      <h1 className="text-4xl text-white font-semibold pt-3">Feedbacks</h1>
    </div>
    <div className="flex justify-center items-center lg:ml-64">
      
      <FeedbacksDatatable/>
    </div>
      
      
    </>
  )
}

export default FeedbacksList