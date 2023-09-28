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


        <form onSubmit={ onSubmit } className="bg-b} bg-opacity-10 shadow-md rounded-lg p-6  lg:w-[600px] lg:ml-64">
          <div className="flex justify-start flex-col gap-2">
          <label htmlFor="" className="text-white">Rendimiento</label>
          <input className="h-10 rounded-sm pl-2" type="number" { ...register( "rendimiento", {
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
          </div>
          <br />
          <div className="flex justify-start flex-col gap-2">
          <label className="text-white" htmlFor="">Frecuencia asistencia</label>
          <select className="h-10 rounded-sm pl-2" name="" id="" { ...register( "frecuencia", {
            required: {
              value: true,
              message: "Debe elegir una opcion",
            }
          } ) }>
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
          <select className="w-[270px] h-10" name="" id="" { ...register( "faltas", {
            required: {
              value: true,
              message: "Debe elegir una opcion"
            }
          } ) }>
            <option selected></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
         </div>

        

          <div className=""> 
          <label className="text-white" htmlFor="">Ha participado en STEM?</label>

<select className="w-[260px] h-10" name="" id="" { ...register( "participacion", {
  required: {
    value: true,
    message: "Debe elegir una opcion"
  }
} ) }>
  <option selected></option>
  <option value="si">Si</option>
  <option value="no">No</option>
</select>
          </div>

         </div>
   

        <div className="flex justify-start flex-col gap-2">
          <label className="text-white" htmlFor="">Nivel estres</label>
          <input className="h-10 rounded-sm pl-2" type="number" { ...register( "estres", {
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
          </div>
<br />

<div className="flex justify-start flex-col gap-2">
<label className="text-white">
            ¿Participa en grupos STEM?
          </label>
          <select className="h-10" { ...register( "grupos", {
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

          <label className="text-white" >
            Horas de trabajo y estudio semanal
          </label>
          <select className="h-10"  { ...register( "horas", {
            required: {
              value: true,
              message: "Debe elegir una franja"
            }
          } ) }
          >
            <option selected></option>
            <option value="0-12" >0-12</option>
            <option value="13-24">13-24</option>
            <option value="25-36">25-36</option>
            <option value="37-48">37-48</option>

          </select>
          </div>

         
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

          <button type="submit" className="text-white m-auto py-3 px-4 border">SUBMIT</button>

        </form>
      </div>
    </div>
  );
};
