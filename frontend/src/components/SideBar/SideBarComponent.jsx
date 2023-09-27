import React, { useState } from 'react';

export const SideBarComponent = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Función para abrir o cerrar el menú
  const toggleSidebar = () => { 
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    

    <div className="absolute right-10 top-10 font-bold text-4xl z-30 text-white sm:block lg:hidden" onClick={toggleSidebar}>x</div>
      <div
        className={`sidebar fixed top-0 flex h-screen justify-between py-10 flex-col bottom-0 lg:left-0 lg:w-64 bg-[#292B56] shadow duration-700 overflow-y-auto text-center lg:translate-x-0 ${!isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          
      >
        <div className='block'>
          <h1>SAM</h1>
        </div>
        <div className='w-full p-16 text-center flex justify-center z-20 text-white cursor-pointer'>
          <ul className="flex justify-center flex-col text-xl">
            <li className="w-64 h-12 flex items-center lg:bg-black justify-center lg:hover:bg-darkBlue duration-300">Generar Ticket</li>
            <li className="w-64 h-12 flex items-center justify-center lg:hover:bg-darkBlue duration-300">Dashboard</li>
            <li className="w-64 h-12 flex items-center justify-center lg:hover:bg-darkBlue duration-300">Foro</li>
            <li className="w-64 h-12 flex items-center justify-center lg:hover:bg-darkBlue duration-300">Biblioteca</li>
          </ul>
        </div>
 
        <div>
        <span className='text-darkBlue text-xl'>Logout </span>
        </div>
      </div>
    </>
  )
}
