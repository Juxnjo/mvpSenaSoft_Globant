import React, { useState } from 'react';
import { Link } from "react-router-dom"



const SideBarComponent = () => {
   

   return (
      <>
{/* COMPONETE MENU LATERAL Y REUTLIZADO EN TODO EL PROYECTO */}
         <div onClick={menuLateral} id='menu-hamburguesa' className='absolute z-20 sm:block lg:hidden left-5 top-4 border pl-2 pr-2 text-lg'>
            <i class="fa-solid fa-bars text-white"></i>
         </div>
         <div id='barra-lateral' className="w-full lg:w-64 z-10 bg-[#000] h-screen flex flex-col fixed">
            <aside className="w-64 h-screen p-6 pt-5 flex translate-x-20 scale-105 lg:scale-100 lg:translate-x-0  flex-col justify-center lg:justify-start gap-4">
               <div className='lg:pt-3'>
                  <p className='text-white ml-2'><span className='font-bold text-white text-3xl'>SAM</span></p>
               </div>

               <ul className='mt-10 translate-x-5 scale-105 mb-20'>
                  <Link to="/home">
                     <li className="mb-8 flex items-center gap-5">
                     <i class="fa-solid fa-bars text-2xl text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Home</a>
                     </li>
                  </Link>
                  
                 

                  <Link to="/ticket">
                  <li className="mb-2">
                     <div className='flex items-center  gap-4'>
                        <i class="text-2xl fa-solid fa-folder-open text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Generar Ticket</a>
                     </div>
                  </li>
                  </Link>
                  <Link to="/dashboard">
                  <li className="mb-2">
                  <div className='flex items-center justify-start gap-5'>
                        <i class="text-2xl fa-solid fa-pen-to-square text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Dashboard</a>
                     </div>
                  </li></Link>
                  <Link to="/foro">
                  <li className="mb-2">
                     <div className='flex items-center justify-start gap-5'>
                        <i class="text-2xl fa-solid fa-pen-to-square text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Foro</a>
                     </div>
                  </li>
                  </Link>
                  <Link to="/books">
                  <li className="mb-2">
                     <div className='flex items-center justify-start gap-5'>

                        <i class="text-2xl fa-solid fa-images text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Biblioteca</a>
                     </div>
                  </li>
                  </Link>
               </ul>
               <div className='absolute gap-3 left-0 bottom-10 lg:bottom-6 p-2 flex justify-start px-10 items-center text-lg text-white bg-blue-400 w-60'>
               <i class="fa-solid fa-right-from-bracket"></i>
                  <span>Logout</span>
               </div>
            </aside>
         </div>
      </>
   );
};

export default SideBarComponent;
