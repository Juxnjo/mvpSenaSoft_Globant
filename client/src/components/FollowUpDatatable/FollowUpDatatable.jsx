import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FollowUpDatatable = () => {

    const [followupList, setFollowUpList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Realizar la solicitud GET al endpoint
        fetch('http://127.0.0.1:8000/api/followup/')
            .then(response => response.json())
            .then(data => {
                setFollowUpList(data);
            })
            .catch(error => console.error('Error', error));
    }, []);

    //Tomar el valor del registro para enviarlo al formulario feedback
    const redirectFeedback = (followupId) => {
        navigate(`/feedback/${followupId}`);
    };

  return (
    <div className="flex h-screen items-center justify-center text-center text-black">
            
            <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Ticket Id</th>
                        <th className="px-4 py-2">FollowUp Id</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2"></th>

                    </tr>
                </thead>
                
                <tbody >
                {followupList.map((followup) => (
                    <tr key={followup.id}>
                        <td className="px-4 py-2">{followup.ticket}</td>
                        <td className="px-4 py-2">{followup.id}</td>
                        <td className="px-4 py-2">{followup.phase}</td>
                        <td className="px-4 py-2">
                        <button
                            onClick={() => redirectFeedback(followup.id)}
                            className="bg-semiDarkBlue hover:bg-semiLightBlue text-white font-semibold my-2 py-2 px-4 rounded-md"
                            >Agregar Feedback
                            </button>
                        </td>
                    </tr>

                ))}

                </tbody>
            </table>

        </div>

  )
}

export default FollowUpDatatable