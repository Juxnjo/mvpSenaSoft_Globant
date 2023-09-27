

export const CardComponent = ({title, img}) => {
  return (
    <div className="w-auto bg-white bg-opacity-20 m-4">
        <img className="flex m-auto w-1/4 p-2" src={img} alt="" />
        <h1 className="font-semibold text-xl">{title}</h1>
    </div>
  )
}
