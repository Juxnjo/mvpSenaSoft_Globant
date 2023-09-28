
import { CardComponent } from "../components/CardLibrary/CardComponent";
import SideBarComponent from "../components/SideBar/SideBarComponent";

export const LibraryPage = () =>
{
  return (
    <>
      <SideBarComponent />
      <div className="py-10 sm:ml-0 pl-10 lg:pl-0 lg:ml-72 text-white flex gap-3 justify-between pr-10 ">
        <h1 className="font-bold text-3xl">Resource Library</h1>
      </div>
<<<<<<< HEAD
      <div className="flex h-50 items-center lg:ml-64 justify-center text-center">
        <div className="font-Roboto text-white">
=======
      <div className="flex h-50 items-center justify-center text-center">
        <div className="font-Roboto text-white lg:ml-64">
>>>>>>> 84308d1740116d97133d9e2affb790bcca5e7d5c
          <h1 className="text-3xl font-semibold ">BOOKS</h1>
          <div className="grid lg:grid-cols-3">
          <CardComponent img="pythonbook.jpg" title="Python Book"/>
          <CardComponent img="algoritmosbook.jpg" title="Algorithms Book" />
          <CardComponent img="githubbook.jpg" title="GitHub Book"/>
          <CardComponent img="IAbook.jpg" title="Artificial Intelligence Book" />
          <CardComponent img="pythonbook.jpg" title="Python Book"/>
          <CardComponent img="algoritmosbook.jpg" title="Algorithms Book" />
          <CardComponent img="githubbook.jpg" title="GitHub Book"/>
          <CardComponent img="IAbook.jpg" title="Artificial Intelligence Book" />
          <CardComponent img="pythonbook.jpg" title="Python Book"/>
          <CardComponent img="algoritmosbook.jpg" title="Algorithms Book" />
          <CardComponent img="githubbook.jpg" title="GitHub Book"/>
          <CardComponent img="IAbook.jpg" title="Artificial Intelligence Book" />
          </div>
          

        </div>


      </div>



    </>
  )
}
