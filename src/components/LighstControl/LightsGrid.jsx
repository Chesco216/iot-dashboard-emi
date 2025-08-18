import { useEffect, useState } from "react"
import { LightsCard } from "./LightsCard"
import { readMQTTMessage } from "../../services"

export const LightsGrid = () => {

  const [lights, setLights] = useState()

  useEffect(() => {
    readMQTTMessage().then(res => setLights(res))
  }, [])
  
  console.log({lights})

  return (
    <div className="my-[40px] mx-[30px] border-1 border-slate-300 p-[30px] rounded-xl">
      <h1 className="font-semibold text-2xl">Control de Iluminacion</h1>
      <p className="text-slate-600">Controla las luce por este dashborad</p>
      <span className="flex gap-[20px] my-[30px]">
        <button className="rounded-md font-semibold text-white bg-black px-[10px] py-[8px]">Encender Todas</button>
        <button className="rounded-md font-semibold border-slate-300 border-1 text-black bg-white px-[10px] py-[8px]">Apagar Todas</button>
      </span>
      <div className="grid grid-cols-2 gap-[20px]">
        <LightsCard aula={101} isActive={false}/>
        <LightsCard aula={102} isActive={true}/>
        <LightsCard aula={103} isActive={true}/>
        <LightsCard aula={104} isActive={true}/>
        <LightsCard aula={105} isActive={false}/>
        <LightsCard aula={106} isActive={true}/>
        <LightsCard aula={107} isActive={true}/>
        <LightsCard aula={108} isActive={true}/>
      </div>
    </div>
  )
}

