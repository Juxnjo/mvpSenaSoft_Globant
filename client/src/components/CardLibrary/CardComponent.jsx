

export const CardComponent = ({title, img}) => {
  return (
    <div className="w-64 h-64  border m-4 rounded-sm hover:scale-105 duration-300">
        <div className="bg-white h-48 bg-opacity-50 overflow-hidden">
        <img className="flex m-auto w-40" src={img} alt="" />
        </div>

        <h1 className="font-normal pt-4 text-xl">{title}</h1>
     
    </div>
  )
}
