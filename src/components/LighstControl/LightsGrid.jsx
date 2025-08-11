import { LightsCard } from "./LightsCard"

export const LightsGrid = () => {
  return (
    <div className="my-[40px] mx-[30px] border-1 border-slate-300 p-[30px] rounded-xl">
      <h1 className="font-semibold text-2xl">Control de Iluminacion</h1>
      <p className="text-slate-600">Controla las luce por este dashborad</p>
      <span className="flex gap-[20px] my-[30px]">
        <button className="rounded-md font-semibold text-white bg-black px-[10px] py-[8px]">Encender Todas</button>
        <button className="rounded-md font-semibold border-slate-300 border-1 text-black bg-white px-[10px] py-[8px]">Apagar Todas</button>
      </span>
      <div className="grid grid-cols-2 gap-[20px]">
        <LightsCard aula={101}/>
        <LightsCard aula={102}/>
        <LightsCard aula={103}/>
        <LightsCard aula={104}/>
      </div>
    </div>
  )
}

