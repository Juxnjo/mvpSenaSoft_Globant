
import CalendarComponent from "../components/Calendar/CalendarComponent"
import SideBarComponent from "../components/SideBar/SideBarComponent"



export const HomePage = () => {
  return (
    <>
      <SideBarComponent />

      <div className="h-screen m-auto">
      <div className="py-14 sm:ml-0 pl-16 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
        <div>
          <h1 className="font-bold text-4xl">Hola! Usuario</h1>
        </div>

      </div>

      <div className="ml-64 text-white font-light flex justify-start pl-20">
        <CalendarComponent />
      </div>

      <div className="ml-64 text-white font-light flex justify-start pl-20 mt-16 opacity-50">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur inventore, dicta, totam eaque dolorum provident ad, rerum asperiores quos praesentium voluptate ab porro nihil aliquam ratione eius nemo quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur inventore, dicta, totam eaque dolorum provident ad</p>
      </div>
      </div>
    </>
  )
}
