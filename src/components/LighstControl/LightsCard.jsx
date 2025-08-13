import { turnLightOff, turnLightOn } from "../../services"

export const LightsCard = ({aula}) => {

  const handleLight = async(e) => {

    if(e.target.checked) await turnLightOff(3)
    if(e.target.checked) await turnLightOn(2)

  }

  return (
    <div className="flex flex-col p-[30px] border-1 rounded-xl border-slate-300">
      <h3 className="font-semibold text-xl mb-[15px]">Aula {aula}</h3>
      
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p>Luces</p>
        <input id='inp1' onClick={(e) => handleLight(e)} type="checkbox" value="" className="sr-only peer"/>
        <div className="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p>Camara</p>
        <input id="inp2" type="checkbox" value="" className="sr-only peer"/>
        <div className="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
      </label>
    </div>
  )
}

