import SideBarComponent from "../components/SideBar/SideBarComponent";


export const TicketsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
  
      <div className="bg-blue-500 py-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold ml-64 text-4xl">Hola! Usuario</h1>
          <div className="hidden lg:block w-10 h-10 bg-semiLightBlue rounded-full"></div>
        </div>
      </div>
      <SideBarComponent />
 
      <div className="container py-6 flex flex-col items-center p-5">
        
        <form
          action=""
          method="post"
          className="bg-white bg-opacity-5 shadow-md rounded-lg p-6  lg:w-[700px] lg:ml-64"
        >
          <article className="flex justify-start gap-10">
          <div className="mb-4">
            <label htmlFor="rendimiento" className="block text-gray-700 text-sm font-bold mb-2">
              Rendimiento Académico:
            </label>
            <input
              type="text"
              id="rendimiento"
              name="rendimiento"
              placeholder="Ingrese su rendimiento académico"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="frecuencia" className="block text-gray-700 text-sm font-bold mb-2">
              ¿Con qué frecuencia asiste a clases regularmente?
            </label>
            <select
              id="frecuencia"
              name="frecuencia"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <textarea
              id="faltas"
              name="faltas"
              placeholder="¿Por qué?"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participó en programas STEM o actividades relacionadas en la escuela secundaria?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="stem-si"
                name="stem"
                value="si"
                className="form-radio h-5 w-5 text-blue-500"
              />
              <label htmlFor="stem-si" className="ml-2">
                Si
              </label>
              <input
                type="radio"
                id="stem-no"
                name="stem"
                value="no"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="stem-no" className="ml-2">
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="nivelEstrés" className="block text-gray-700 text-sm font-bold mb-2">
              En una escala del 1 al 10, ¿cuál es su nivel de estrés en este momento?
            </label>
            <input
              type="number"
              id="nivelEstrés"
              name="nivelEstrés"
              placeholder="Ingrese su nivel de estrés"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Participa en clubes o grupos de estudio relacionados con STEM?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="club-si"
                name="club"
                value="si"
                className="form-radio h-5 w-5 text-blue-500"
              />
              <label htmlFor="club-si" className="ml-2">
                Si
              </label>
              <input
                type="radio"
                id="club-no"
                name="club"
                value="no"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="club-no" className="ml-2">
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Cuántas horas trabaja a la semana (incluyendo trabajo a tiempo parcial y estudio)?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="horas-0-12"
                name="horasTrabajo"
                value="0-12"
                className="form-radio h-5 w-5 text-blue-500"
              />
              <label htmlFor="horas-0-12" className="ml-2">
                0 a 12
              </label>
              <input
                type="radio"
                id="horas-13-24"
                name="horasTrabajo"
                value="13-24"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="horas-13-24" className="ml-2">
                13 a 24
              </label>
              <input
                type="radio"
                id="horas-25-36"
                name="horasTrabajo"
                value="25-36"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="horas-25-36" className="ml-2">
                25 a 36
              </label>
              <input
                type="radio"
                id="horas-37-48"
                name="horasTrabajo"
                value="37-48"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="horas-37-48" className="ml-2">
                37 a 48
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ¿Ha utilizado servicios de apoyo académico, como tutorías?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="tutoria-si"
                name="tutoria"
                value="si"
                className="form-radio h-5 w-5 text-blue-500"
              />
              <label htmlFor="tutoria-si" className="ml-2">
                Si
              </label>
              <input
                type="radio"
                id="tutoria-no"
                name="tutoria"
                value="no"
                className="form-radio h-5 w-5 text-blue-500 ml-8"
              />
              <label htmlFor="tutoria-no" className="ml-2">
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
