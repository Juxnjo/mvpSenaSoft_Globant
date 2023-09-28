import SideBarComponent from "../components/SideBar/SideBarComponent"


const CommunityPage = () => {
  return (
    <>
    {/* SITIO WEB ESTATICO SIMULANDO UN FORO DONDE LAS PERSONAS PUEDEN INTERACTUAR ENTRE ELLAS */}
      <SideBarComponent />
      <div className="h-screen lg:ml-40">
        <div className="pt-14 sm:ml-0 pl-16 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10">
          <h1 className="font-bold text-4xl">Hola! Foro</h1>
        </div>
        <div className=" flex justify-start w-[450px] m-auto mt-10 ">

          <textarea placeholder="Deja que la comunidad te ayude" className="outline-none rounded-lg p-5 bg-white" name="" id="" cols="60" rows="4"></textarea>
        </div>

        {/* SE SIMULA PERFILES CON RESUESTAS APARTIR DE UNA PREGUNTA QUE HACE UN USUARIO  */}
        <article className="">
          <div className=" flex justify-start w-[450px] m-auto mt-10">

            <p className="opacity-40 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero in tempore quae. Aliquid cum libero eligendi nihil tempore obcaecati!</p>
            <i class="realtive text-5xl mr-2 fa-solid fa-circle"></i>
          </div>
          <div className=" flex justify-start w-[450px] m-auto mt-10">
            <i class="realtive text-5xl mr-3 fa-solid fa-circle"></i>
            <p className="opacity-40 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero in tempore quae. Aliquid cum libero eligendi nihil tempore obcaecati!</p>

          </div>

          <div className=" flex justify-start w-[450px] m-auto mt-10">
            <i class="realtive text-5xl mr-2 fa-solid fa-circle"></i>
            <p className="opacity-40 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero in tempore quae. Aliquid cum libero eligendi nihil tempore obcaecati!</p>

          </div>
        </article>
      </div>
    </>
  )
}

export default CommunityPage
