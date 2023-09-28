import React from 'react'
import SideBarComponent from '../components/SideBar/SideBarComponent'

function FormFollowUp() {
    return (
        <>

            {/* IMPORTO EL SIDEBAR */}
            <SideBarComponent />

            <div className="h-screen py-14 sm:ml-0 pl-16 flex-col lg:pl-0 lg:ml-72 text-white flex gap-3 pr-10">
                <h1 className="font-bold text-4xl">Hola! Usuario</h1>


                <div className='flex justify-start w-[500px] flex-col'>

                    {/* FORMULARIO DE SEGUIMIENTO A LOS USUARIOS */}
                    <form
                        action=""
                        method="post"
                        className="bg-white bg-opacity-5 w-full shadow-md rounded-lg p-6 lg:ml-64"
                    >
                        <h1 className='text-center py-5 font-bold text-2xl'>Datos de la Consulta</h1>

                        <div className="mb-4">
                            <label htmlFor="frecuencia" className="block text-gray-700 text-sm font-bold mb-2">
                                Nombre Del Estudiante
                            </label>
                            <select
                                id="frecuencia"
                                name="frecuencia"
                                className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="diaria">Miller</option>
                                <option value="semanalmente">Juan</option>
                                <option value="ocasionalmente">Maria</option>
                                <option value="nunca">Xiomara</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="frecuencia" className="block text-gray-700 text-sm font-bold mb-2">
                                Seleccione su Area
                            </label>
                            <select
                                id="frecuencia"
                                name="frecuencia"
                                className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="diaria">Area 1</option>
                                <option value="semanalmente">Area 2</option>
                                <option value="ocasionalmente">Are 3</option>
                                <option value="nunca">Area 4</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="frecuencia" className="block text-gray-700 text-sm font-bold mb-2">
                                Seleccione su Estado
                            </label>
                            <select
                                id="frecuencia"
                                name="frecuencia"
                                className="shadow text-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="diaria">Activo</option>
                                <option value="semanalmente">Inactivo</option>
                            </select>
                        </div>

                        <input type="submit" value="Registrar" />

                    </form>
                </div>
            </div>


        </>
    )
}

export default FormFollowUp