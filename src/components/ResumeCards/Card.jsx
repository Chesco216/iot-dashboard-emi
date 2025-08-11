export const Card = ({element, title, value}) => {
  return (
    <div className="flex flex-row gap-[20px] border-1 border-slate-300 p-[10px] rounded-xl items-center px-[20px] w-100">
      {element}
      <span className="flex flex-col">
        <p className="text-slate-500">{title}</p>
        <p className="font-bold text-2xl">{value}</p>
      </span>
    </div>
  )
}

