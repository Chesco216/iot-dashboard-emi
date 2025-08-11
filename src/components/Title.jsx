export const Title = () => {
  return (
    <div className="flex flex-row content-between justify-between px-[40px]"> 
      <span className="flex flex-col gap-[5px]">
        <h1 className="font-bold text-3xl">Monitoreo de Aulas EMI</h1>
        <p className="text-md text-slate-600">Control ON/OFF de energia electrica</p>
      </span>
      <span className="flex flex-col gap-[5px] justify-end items-end">
        <p className="text-md text-slate-600 w-fit">Fecha y Hora actual</p>
        <span className="flex flex-row gap-[20px]">
        <p className="text-xl">8/8/25</p>
        <p className="text-xl">12:00:00 pm</p>
        </span>
      </span>
    </div>
  )
}

