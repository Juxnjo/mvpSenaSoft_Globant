import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeedbacksDatatable = () => {

    const [feedbackList, setFeedbackList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Realizar la solicitud GET al endpoint
        fetch('http://127.0.0.1:8000/api/feedback/')
            .then(response => response.json())
            .then(data => {
                setFeedbackList(data);
            })
            .catch(error => console.error('Error', error));
    }, []);

  return (
    <div className="flex h-screen items-center justify-center text-center text-black">
            
            <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Feedback Id</th>
                        <th className="px-4 py-2">FollowUp Id</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Qualification</th>

                    </tr>
                </thead>
                
                <tbody >
                {feedbackList.map((feedback) => (
                    <tr key={feedback.id}>
                        <td className="px-4 py-2">{feedback.id}</td>
                        <td className="px-4 py-2">{feedback.followUp}</td>
                        <td className="px-4 py-2">{feedback.phase}</td>
                        <td className="px-4 py-2">{feedback.qualification}</td>
                    </tr>

                ))}

                </tbody>
            </table>

        </div>
  )
}

export default FeedbacksDatatable