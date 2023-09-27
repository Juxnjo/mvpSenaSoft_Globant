
export const Datatable = () =>
{

    

    return (
        <div className="flex h-screen items-center justify-center text-center">
            
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Ticket Id</th>
                        <th className="px-4 py-2">Student Name</th>
                        <th className="px-4 py-2">Area</th>
                        <th className="px-4 py-2">Status</th>

                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="px-4 py-2">Nombre</td>
                        <td className="px-4 py-2">Posición</td>
                        <td className="px-4 py-2">Oficina</td>
                        <td className="px-4 py-2">Edad</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Nombre</td>
                        <td className="px-4 py-2">Posición</td>
                        <td className="px-4 py-2">Oficina</td>
                        <td className="px-4 py-2">Edad</td>


                    </tr>


                </tbody>
            </table>

        </div>

    )
}
