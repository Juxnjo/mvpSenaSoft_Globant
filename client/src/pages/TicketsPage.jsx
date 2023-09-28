import SideBarComponent from "../components/SideBar/SideBarComponent";
import { useForm } from "react-hook-form";

export const TicketsPage = () =>
{
  const { register, handleSubmit,
    formState: { errors }
  } = useForm()

  console.log( errors )

  const onSubmit = handleSubmit( ( data ) =>
  {
    console.log( data )
  } )


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


        <form onSubmit={ onSubmit }>
          <label htmlFor="">Rendimiento</label>
          <input type="number" { ...register( "rendimiento", {
            required: {
              value: true,
              message: "Rendimiento es obligatorio"
            },
            max: {
              value: 10,
              message: "Maximo 10"
            }
          } ) } />
          {
            errors.rendimiento && <span className="text-red">{ errors.rendimiento.message }</span>
          }

          <label htmlFor="">Frecuencia asistencia</label>
          <select name="" id="" { ...register( "frecuencia", {
            required: {
              value: true,
              message: "Debe elegir una opcion",
            }
          } ) }>
            <option selected ></option>
            <option value="diaria">Diaria</option>
            <option value="semanalmente">Semanalmente</option>
            <option value="ocasionalmente">Ocasionalmente</option>
            <option value="nunca">Nunca</option>
          </select>

          <label htmlFor="">Ha faltado?</label>
          <select name="" id="" { ...register( "faltas", {
            required: {
              value: true,
              message: "Debe elegir una opcion"
            }
          } ) }>
            <option selected></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="">Ha participado en STEM?</label>
          <select name="" id="" { ...register( "participacion", {
            required: {
              value: true,
              message: "Debe elegir una opcion"
            }
          } ) }>
            <option selected></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="">Nivel estres</label>
          <input type="number" { ...register( "estres", {
            required: {
              value: true,
              message: "Estres es obligatorio"
            },
            max: {
              value: 10,
              message: "Maximo 10"
            }
          } ) } />
          {
            errors.estres && <span className="text-red">{ errors.estres.message }</span>
          }

          <label >
            ¿Participa en grupos STEM?
          </label>
          <select { ...register( "grupos", {
            required: {
              value: true,
              message: "Elija una opcion"
            }
          } ) }
          >
            <option selected></option>
            <option value="si">Si</option>
            <option value="no">No</option>

          </select>

          <label >
            Horas de trabajo y estudio semanal
          </label>
          <select  { ...register( "horas", {
            required: {
              value: true,
              message: "Debe elegir una franja"
            }
          } ) }
          >
            <option selected></option>
            <option value="0-12">0-12</option>
            <option value="13-24">13-24</option>
            <option value="25-36">25-36</option>
            <option value="37-48">37-48</option>

          </select>

          <label >
              Ha recibido apoyo academico
            </label>
            <select {...register("apoyos", {
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

            <label >
              Aceptar terminos y condiciones
            </label>
            <input
              type="checkbox"
              
              {...register("terminos", {
                required: {
                  value: true,
                  message: "Debe aceptar los terminos"
                }
              })}
            />
            {
            errors.terminos && <span className="text-red">{ errors.terminos.message }</span>
          }


          <button type="submit" className="text-white">SUBMIT</button>

        </form>
      </div>
    </div>
  );
};
