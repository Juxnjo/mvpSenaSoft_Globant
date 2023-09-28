
import CalendarComponent from "../components/Calendar/CalendarComponent"
import SideBarComponent from "../components/SideBar/SideBarComponent"



export const HomePage = () => {
  return (
    <>
      <SideBarComponent />
  
      <div className="h-screen m-auto">
        <div className="py-10 sm:ml-0 pl-16 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
          <div>
            <h1 className="font-bold text-3xl">Hola! <span className="text-4xl">Usuario</span></h1>
          </div>
          <div className="">

          </div>

        </div>

        <div className="lg:ml-64 text-white font-light flex justify-start lg:pl-20 px-5 lg:p-5">
          <CalendarComponent />
        </div>
          <h2 className="ml-[335px] font-bold text-2xl text-white mt-10">
          -  Historias 
          </h2>
        <div className="lg:ml-64 text-white font-light flex justify-start lg:pl-20 opacity-50 p-2">
       
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur inventore, dicta, totam eaque dolorum provident ad, rerum asperiores quos praesentium voluptate ab porro nihil aliquam ratione eius nemo quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur inventore, dicta, totam eaque dolorum provident ad</p>
        </div>
      </div>
    </>
  )
}
