import SideBarComponent from "../SideBar/SideBarComponent"
import { useParams } from "react-router-dom";
import { useState } from "react";

const FeedbackFormComponent = () => {

    const followUpId = useParams();
    const followUpIdValue = Object.values(followUpId)[0];

    //Form fields

    const [formData, setFormData] = useState({
        comments: "",
        qualification: "",
        followUp : followUpIdValue,
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
          const response = await fetch("http://localhost:8000/api/feedback/new", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
    
            alert("Feedback agregado con exito")
    
          } else {
            alert("Error al guardar el feedback")
    
        }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };


    return (

        <>
        <SideBarComponent/>
        <div className="flex justify-center items-center lg:ml-64">
          <h1 className="text-4xl text-white font-semibold pt-3">Feedback Form</h1>
        </div>
        <div className="flex justify-center items-center lg:ml-64">
          
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64"
            >
            <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
                FollowUp ID:
            </label>
            <input
                id="followup"
                name="followup"
                value={followUpIdValue}
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
                    Calificacion (0 a 5)
                </label>
                <input
                    type="number"
                    id="qualification"
                    name="qualification"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    min={0}
                    max={5}
                >
        
                </input>
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

export default FeedbackFormComponent