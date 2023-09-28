import SideBarComponent from "../SideBar/SideBarComponent"
import { useParams } from "react-router-dom";
import { useState } from "react";

const FollowUpComponent = () => {

    const ticketId = useParams();
    const ticketIdValue = Object.values(ticketId)[0];

    //Form fields

    const [formData, setFormData] = useState({
        comments: "",
        evidence: "",
        ticket : ticketIdValue,
    });


    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:8000/api/followup/new", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
    
            alert("Followup agregado con exito")
    
          } else {
            alert("Error al guardar el followup")
    
        }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };


    return (
        <>
        <SideBarComponent/>
        <div className="flex justify-center items-center lg:ml-64">
          <h1 className="text-4xl text-white font-semibold pt-3">FollowUp Form</h1>
        </div>
        <div className="flex justify-center items-center lg:ml-64">
          
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64"
            >
            <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
                Ticket ID:
            </label>
            <input
                id="ticket"
                name="ticket"
                value={ticketIdValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
            />
            </div>

            <div className="mb-4">
                <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
                    Comentarios
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    value={formData.comments}
                    onChange={handleInputChange}
                >
        
                </textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="evidence" className="block text-gray-700 text-sm font-bold mb-2">
                    Evidencias
                </label>
                <textarea
                    id="evidence"
                    name="evidence"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    value={formData.evidence}
                    onChange={handleInputChange}
                >
        
                </textarea>
            </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Enviar
                    </button>
                </div>

            </form>

        </div>
          
          
        </>
      )
}

export default FollowUpComponent