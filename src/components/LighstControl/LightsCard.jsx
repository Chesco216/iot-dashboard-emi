import { turnLightOff, turnLightOn } from "../../services"
import { useCamera } from "../../store/cameraStore"

export const LightsCard = ({aula, isActive}) => {

  const camera = useCamera(state => state.camera)
  const turnOnCamera = useCamera(state => state.turnOnCamera)
  const turnOffCamera = useCamera(state => state.turnOffCamera)

  const handleLight = async(e) => {

    console.log(e.target.checked)
    if(!e.target.checked) await turnLightOff()
    if(e.target.checked) await turnLightOn()

  }

  const handleCamera = async(e) => {

    console.log(e.target.checked)
    if(!e.target.checked) await turnOffCamera()
    if(e.target.checked) await turnOnCamera()

  }

  if(isActive) return (
    <div className="flex flex-col p-[30px] border-1 rounded-xl border-slate-300">
      <h3 className="font-semibold text-xl mb-[15px] text-slate-400">Aula {aula}</h3>
      
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p className="text-slate-400 font-semibold">Luces</p>
        <input onClick={(e) => handleLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
        <div className="relative w-11 h-6 bg-slate-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-slate-400 rounded-full peer dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-blue-600 dark:peer-checked:bg-slate-400"></div>
      </label>
      <span className="flex flex-row justify-around">
        <p className="font-semibold text-slate-400">Numero de Personas:</p>
        <p className="font-semibold text-slate-400">Intensidad de la luz:</p>
      </span>
    </div>
  )
    else return (
    <div className="flex flex-col p-[30px] border-1 rounded-xl border-slate-300">
      <h3 className="font-semibold text-xl mb-[15px]">Aula {aula}</h3>
      
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p className="font-semibold">Luces</p>
        <input onClick={(e) => handleLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
        <div className="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
      </label>
      <span className="flex flex-row justify-around">
        <p className="font-semibold">Numero de Personas:</p>
        <p className="font-semibold">Intensidad de la luz:</p>
        </span>
    </div>
  )
}

