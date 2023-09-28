import SideBarComponent from "../components/SideBar/SideBarComponent";
import { useState } from "react";


export const TicketsPage = () => {

      //Form fields

      const [formData, setFormData] = useState({
        average: "0",
        frecuency_attendance: "Diaria",
        missing_classes : "Si",
        related_activities_at_school: "Si",
        study_group: "Si",
        support_service : "Si",
        hours_worked: "0 a 12",
        family_support: "Si",
        stress_levels : "1",
        stress_source: "Sobrecarga academica",
        job_expectations: "Si",
        comments : "",
        student: 2,
    });


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:8000/api/tickets/new", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            
          });

          console.log(formData)
    
          if (response.ok) {
    
            alert("Ticket creado con exito")
    
          } else {
            alert("Error al guardar el ticket")
    
        }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
  
      <div className="bg-blue-500 py-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold ml-64 text-4xl">Generar Ticket</h1>
          <div className="hidden lg:block w-10 h-10 bg-semiLightBlue rounded-full"></div>
        </div>
      </div>
      <SideBarComponent />
 
      <div className="container py-6 flex flex-col items-center p-5">
        
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64"
        >
          <div className="mb-4">
            <label htmlFor="rendimiento" className="block text-gray-700 text-sm font-bold mb-2">
              Rendimiento Académico:
            </label>
            <input
              type="number"
              id="average"
              name="average"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.average}
              onChange={handleInputChange}
              min={0}
              max={10}

            />
          </div>

          <div className="mb-4">
            <label htmlFor="frecuency_attendance" className="block text-gray-700 text-sm font-bold mb-2">
              ¿Con qué frecuencia asiste a clases regularmente?
            </label>
            <select
              id="frecuency_attendance"
              name="frecuency_attendance"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.frecuency_attendance}
              onChange={handleInputChange}
            >
              <option value="Diariamente">Diaria</option>
              <option value="Semanalmente">Semanalmente</option>
              <option value="Ocasionalmente">Ocasionalmente</option>
              <option value="Nunca">Nunca</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="faltas" className="block text-gray-700 text-sm font-bold mb-2">
              ¿Ha faltado a exámenes o presentaciones importantes?
            </label>
            <select
              id="missing_classes"
              name="missing_classes"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.missing_classes}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participó en programas STEM o actividades relacionadas en la escuela secundaria?
            </label>
            <div className="flex items-center">
            <select
              id="related_activities_at_school"
              name="related_activities_at_school"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.related_activities_at_school}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="nivelEstrés" className="block text-gray-700 text-sm font-bold mb-2">
              En una escala del 1 al 10, ¿cuál es su nivel de estrés en este momento?
            </label>
            <input
              type="number"
              id="stress_levels"
              name="stress_levels"
              min={1}
              max={10}
              value={formData.stress_levels}
              onChange={handleInputChange}
              placeholder="Ingrese su nivel de estrés"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participa en clubes o grupos de estudio relacionados con STEM?
            </label>
            <div className="flex items-center">
            <select
              id="study_group"
              name="study_group"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.study_group}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Cuántas horas trabaja a la semana (incluyendo trabajo a tiempo parcial y estudio)?
            </label>
            <div className="flex items-center">
            <select
              id="hours_worked"
              name="hours_worked"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.hours_worked}
              onChange={handleInputChange}
            >
              <option value="0 a 12">De 0 a 12 horas</option>
              <option value="13 a 24">De 13 a 24 horas</option>
              <option value="25 a 36">De 25 a 36 horas</option>
              <option value="37 a 48">De 37 a 48 horas</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Ha utilizado servicios de apoyo académico, como tutorías?
            </label>
            <div className="flex items-center">
            <select
              id="support_service"
              name="support_service"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.support_service}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Siente que su familia apoya su elección de carrera STEM?
            </label>
            <div className="flex items-center">
            <select
              id="family_support"
              name="family_support"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.family_support}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Cuáles son las principales fuentes de estrés para usted?
            </label>
            <div className="flex items-center">
            <select
              id="stress_source"
              name="stress_source"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.stress_source}
              onChange={handleInputChange}
            >
              <option value="Sobrecarga academica">Sobrecarga academica</option>
              <option value="Falta de tiempo">Falta de tiempo</option>
              <option value="Presentacion de un examen">Presentacion de un examen</option>
              <option value="Exposicion de algun trabajo">Exposicion de algun trabajo</option>
              <option value="Tareas">Tareas</option>
              <option value="Intervencion en el aula">Intervencion en el aula</option>
              <option value="Competitividad entre compañeros">Competitividad entre compañeros</option>
              <option value="Trabajar en grupo">Trabajar en grupo</option>
              <option value="Problemas familiares">Problemas familiares</option>
            </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Tiene expectativas positivas sobre las oportunidades de trabajo y el potencial ingreso en su campo STEM después de la graduación?
            </label>
            <div className="flex items-center">
            <select
              id="job_expectations"
              name="job_expectations"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.job_expectations}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
            </div>
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Comentarios
            </label>
            <div className="flex items-center">

              <textarea 
              name="comments" 
              id="comments" 
              cols="10" 
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              value={formData.comments}
              onChange={handleInputChange}
              >

              </textarea>

            </div>
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
    </div>
  );
};
