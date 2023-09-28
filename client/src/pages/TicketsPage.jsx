import SideBarComponent from "../components/SideBar/SideBarComponent";

import { useState } from "react";


import { useForm } from "react-hook-form";


export const TicketsPage = () => {
  // CREAR PROPIEDADES DE LA FUNCION USE FORM
  // DISPARAR EVENTOS MEDIANTE CLICK Y QUE EJECUTEN CIERTAS ACCIONES

  const { register, handleSubmit,
    formState: { errors }
  } = useForm()

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

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
    <div className="min-h-screen flex flex-col">

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



        <form onSubmit={onSubmit} className="bg-b} bg-opacity-10 shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64">
          <div className="flex justify-start flex-col gap-2">
            <label htmlFor="" className="text-white">Rendimiento</label>

            {/* VALIDAMOS QUE EN EL INPUT NO SE PUEDA INGRESAR UN NUMERO SUPERIOR A 10 */}

            <input className="h-10 rounded-sm pl-2" type="number" {...register("rendimiento", {
              required: {
                value: true,
                message: "Rendimiento es obligatorio"
              },
              max: {
                value: 10,
                message: "Maximo 10"
              }
            })} />

            {/* PROGRAMAMOS UN ERRROR CON UN MENSAJE QUE ESTE CAMPO ES OBLIGATORIO */}
            {
              errors.rendimiento && <span className="text-red">{errors.rendimiento.message}</span>
            }

          </div>
          <br />


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

{/* EN CADA UNO DE LOS SELECT HACEMOS LA MISMA VALIDACION QUE SE HAN OBLIGATORIOS */}

          <div className="flex justify-start flex-col gap-2">
            <label className="text-white" htmlFor="">Frecuencia asistencia</label>
            <select className="h-10 rounded-sm pl-2" name="" id="" {...register("frecuencia", {
              required: {
                value: true,
                message: "Debe elegir una opcion",
              }
            })}>
              <option  ></option>
              <option value="diaria">Diaria</option>
              <option value="semanalmente">Semanalmente</option>
              <option selected value="ocasionalmente">Ocasionalmente</option>
              <option value="nunca">Nunca</option>

            </select>
          </div>
          <br />
          <div className="flex justify-between gap-5">
            <div className="">
              <label className="text-white" htmlFor="">Ha faltado?</label>
              <select className="w-[270px] h-10" name="" id="" {...register("faltas", {
                required: {
                  value: true,
                  message: "Debe elegir una opcion"
                }
              })}>
                <option selected></option>
                <option value="si">Si</option>
                <option value="no">No</option>
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



            <div className="">
              <label className="text-white" htmlFor="">Ha participado en STEM?</label>

              <select className="w-[260px] h-10" name="" id="" {...register("participacion", {
                required: {
                  value: true,
                  message: "Debe elegir una opcion"
                }
              })}>
                <option selected></option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>

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


          <div className="flex justify-start flex-col gap-2">
            <label className="text-white" htmlFor="">Nivel estres</label>
            <input className="h-10 rounded-sm pl-2" type="number" {...register("estres", {
              required: {
                value: true,
                message: "Estres es obligatorio"
              },
              max: {
                value: 10,
                message: "Maximo 10"
              }
            })} />
            {
              errors.estres && <span className="text-red">{errors.estres.message}</span>
            }

          </div>
          <br />

          <div className="flex justify-start flex-col gap-2">
            <label className="text-white">
              ¿Participa en grupos STEM?
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

            <select className="h-10" {...register("grupos", {
              required: {
                value: true,
                message: "Elija una opcion"
              }
            })}
            >
              <option selected></option>
              <option value="si">Si</option>
              <option value="no">No</option>

            </select>


            <label className="text-white" >
              Horas de trabajo y estudio semanal
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

            <select className="h-10"  {...register("horas", {
              required: {
                value: true,
                message: "Debe elegir una franja"
              }
            })}
            >
              <option selected></option>
              <option value="0-12" >0-12</option>
              <option value="13-24">13-24</option>
              <option value="25-36">25-36</option>
              <option value="37-48">37-48</option>

            </select>

          </div>

{/* LOS SELECT SON CAMPOS DONDE SE VALIDA QUE SE DEBA ELEGIR UN APCION*/}

          <br />
          <div>
            <label className="text-white">
              Ha recibido apoyo academico
            </label>
            <br />
            <select className="w-[200px] h-10" {...register("apoyos", {
              required: {
                value: true,
                message: "Elija una opcion"
              }
            })}
            >
              <option selected></option>
              <option value="si">Si</option>
              <option value="no">No</option>

            </select>


          </div>
          <br />

          {/* MEDIANTE UN EVENTO SUBMIT ENVIAMOS ESOS DATOS A LA FUNCION QUE CREAMOS PARA QUE NOS CAPTURE LOS DATOS */}

          <button type="submit" className="text-white m-auto py-3 px-4 border">SUBMIT</button>

        </form>
      </div>
    </div>
  );
};
