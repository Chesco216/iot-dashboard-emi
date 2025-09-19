import { useEffect, useState } from "react"
import { LightsCard } from "./LightsCard"
import { readMQTTMessage, setIntensityMQTT } from "../../services"

export const LightsGrid = () => {

  const [lights, setLights] = useState()
  const [intensity, setIntensity] = useState(100)

  const setIntensityValue = async() => {
    if (confirm(`Esta seguro que desea ajustar el valor aceptable de iluminosidad a ${intensity}`)) {
      console.log('cambiando valor')
      await setIntensityMQTT(intensity)

    }
  }

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
        <span className="flex flex-col gap-2">
          <label className="font-semibold">Intensidad luminica: {intensity}</label>
          <input className='' onChange={e => setIntensity(e.target.value)} type="range" min="100" max="200"/>
          <button className="py-[5px] px-[10px] bg-black text-white rounded-md" onClick={() => setIntensityValue()}>Ajustar</button>
        </span>
      </span>
      <div className="grid grid-cols-2 gap-[20px]">
        <LightsCard aula={301} isActive={false}/>
        <LightsCard aula={302} isActive={true}/>
        <LightsCard aula={303} isActive={true}/>
        <LightsCard aula={304} isActive={true}/>
        <LightsCard aula={305} isActive={true}/>
        <LightsCard aula={306} isActive={true}/>
        <LightsCard aula={307} isActive={true}/>
        <LightsCard aula={308} isActive={true}/>
        <LightsCard aula={309} isActive={true}/>
        <LightsCard aula={310} isActive={true}/>
      </div>
    </div>
  )
}

