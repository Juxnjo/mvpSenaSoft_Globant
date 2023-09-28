import { useState, useEffect } from "react";

export const Datatable = () =>
{

    const [ticketList, setTicketList] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET al endpoint
        fetch('http://127.0.0.1:8000/api/tickets/')
            .then(response => response.json())
            .then(data => {
                setTicketList(data);
            })
            .catch(error => console.error('Error', error));
    }, []);
    

    return (
        <div className="flex h-screen items-center justify-center text-center text-black">
            
            <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Ticket Id</th>
                        <th className="px-4 py-2">Student Name</th>
                        <th className="px-4 py-2">Area</th>
                        <th className="px-4 py-2">Status</th>

                    </tr>
                </thead>
                
                <tbody >
                {ticketList.map((ticket) => (
                    <tr key={ticket.id}>
                        <td className="px-4 py-2">{ticket.id}</td>
                        <td className="px-4 py-2">{ticket.student_name} {ticket.student_last_name}</td>
                        <td className="px-4 py-2">{ticket.area}</td>
                        <td className="px-4 py-2">{ticket.phase}</td>
                    </tr>

                ))}

                </tbody>
            </table>

        </div>

    )
}
