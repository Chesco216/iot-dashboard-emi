import { useEffect, useState } from "react"
import { LightsCard } from "./LightsCard"
import { setIntensityMQTT, turnAllOff, turnAllOn } from "../../services"
import useMqtt from "../../hooks/useMqtt"

export const LightsGrid = () => {

  const [active, setActive] = useState({
    medio: true,
    alto: false
  })

  const setIntensityValue = async(value) => {
    if (confirm(`Esta seguro que desea ajustar el valor de la intensidad de luz aceptable?`)) {
      console.log('cambiando valor')
      await setIntensityMQTT(value)

    }
  }

  const turnAll = async(v) => {
    if(v) {
      if (confirm(`Esta seguro que desea encender todas las luces?`)) {
        console.log('cambiando valor')
        await turnAllOn()
      }
    } else {
      if (confirm(`Esta seguro que desea apagar todas la luces?`)) {
        console.log('cambiando valor')
        await turnAllOff()
      }
    }
  }

  const BROKER_URL = 'ws://broker.emqx.io:8083/mqtt'; 
  const TOPIC = 'control/consumo/emi/v1'

  const { message } = useMqtt(BROKER_URL, TOPIC)

  console.log(message)

  return (
    <div className="my-[40px] mx-[30px] border-1 border-slate-300 p-[30px] rounded-xl">
      <h1 className="font-semibold text-2xl">Control de Iluminacion</h1>
      <p className="text-slate-600">Controla las luce por este dashborad</p>
      <span className="flex gap-[20px] my-[30px]">
        <button className="rounded-md font-semibold text-white bg-black px-[10px] py-[8px]" onClick={() => turnAll(1)}  >Encender Todas</button>
        <button className="rounded-md font-semibold border-slate-300 border-1 text-black bg-white px-[10px] py-[8px]" onClick={() => turnAll(0)}>Apagar Todas</button>
        <span className="flex flex-row gap-1 border-1 border-slate-300 items-center pl-[15px] rounded-lg">
          <p>Intensidad de luz aceptable: </p>
          <label 
            className={(active.medio) ? 'rounded-lg py-[5px] px-[30px] bg-white font-semibold text-black' : 'py-[5px] px-[30px] font-semibold text-slate-400'}
            onClick={() => {
              setActive({medio: true, alto: false})
              setIntensityValue(110)
            }}
          >MEDIO</label>
          <label 
            className={(active.alto) ? 'rounded-lg py-[5px] px-[30px] bg-white font-semibold text-black' : 'py-[5px] px-[30px] font-semibold text-slate-400'}
            onClick={() => {
              setActive({medio: false, alto: true})
              setIntensityValue(150)
            }}>ALTO</label>
        </span>
      </span>
      <div className="grid grid-cols-2 gap-[20px]">
        <LightsCard aula={301} isActive={false} message={message}/>
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

