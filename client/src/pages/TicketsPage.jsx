import SideBarComponent from "../components/SideBar/SideBarComponent";
import { useForm } from "react-hook-form";

export const TicketsPage = () => {
  const {register, handleSubmit,
      formState: {errors}
    } = useForm()
    
    console.log(errors)
    
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    })


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
        

        <form onSubmit={onSubmit} 


          className="bg-white shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64"

        >
          <article className="flex justify-start gap-10">
          <div className="mb-4">
            <label htmlFor="rendimiento" className="block text-gray-700 text-sm font-bold mb-2">
              Rendimiento Académico:
            </label>
            <input
              type="number"
              placeholder="Ingrese su rendimiento académico"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("rendimiento ", {
                required: {
                  value: true,
                  message: "Nombre es requerido"
                },
                max: {
                  value: 10,
                  message: "Maximo 10" 
                }, 
                maxLenght: {
                  value: 2,
                  message: "Numero de maximo dos caracteres"
                }
              })}
            />
            {
              errors.rendimiento && <span className="">{errors.rendimiento.message}</span>
            }
            
          </div>

          <div className="mb-4">
            <label htmlFor="frecuencia" className="block text-gray-700 text-sm font-bold mb-2">
              ¿Con qué frecuencia asiste a clases regularmente?
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("frecuencia ", {
                required: true
              })}
            >
              <option value="diaria">Diaria</option>
              <option value="semanalmente">Semanalmente</option>
              <option value="ocasionalmente">Ocasionalmente</option>
              <option value="nunca">Nunca</option>
            </select>
          </div>
          </article>

          <div className="mb-4">
            <label htmlFor="faltas" className="block text-gray-700 text-sm font-bold mb-2">
              ¿Ha faltado a exámenes o presentaciones importantes?
            </label>
            <select
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("faltas ", {
                required: true
              })}
            >
              <option value="si">Si</option>
              <option value="no">No</option>
              
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participó en programas STEM o actividades relacionadas en la escuela secundaria?
            </label>
            <select
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("participacion", {
                required: true
              })}
            >
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
              max={10}
              placeholder="Ingrese su nivel de estrés"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("estres ", {
                required: true
              })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participa en clubes o grupos de estudio relacionados con STEM?
            </label>
            <select
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("grupos", {
                required: true
              })}
            >
              <option value="si">Si</option>
              <option value="no">No</option>
              
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Cuántas horas trabaja a la semana (incluyendo trabajo a tiempo parcial y estudio)?
            </label>
            <select
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("horas", {
                required: true
              })} 
            >
              <option value="0-12">0-12</option>
              <option value="13-24">13-24</option>
              <option value="25-36">25-36</option>
              <option value="37-48">37-48</option>
              
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Ha utilizado servicios de apoyo académico, como tutorías?
            </label>
            <select
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("apoyos", {
                required: true
              })}
            >
              <option value="si">Si</option>
              <option value="no">No</option>
              
            </select>
          </div>
          
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aceptar terminos y condiciones
            </label>
            <input
              type="checkbox"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("terminos", {
                required: true
              })}
            />
            
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
