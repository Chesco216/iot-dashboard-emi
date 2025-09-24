import { turnLightOff, turnLightOn } from "../../services"

export const LightsCard = ({aula, isActive}) => {

  const handleTopLight = async(e) => {

    if(!e.target.checked) await turnLightOff("top")
    if(e.target.checked) await turnLightOn("top")

  }

  const handleBottomLight = async(e) => {

    if(!e.target.checked) await turnLightOff("bottom")
    if(e.target.checked) await turnLightOn("bottom")

  }

  if(isActive) return (
    <div className="flex flex-col p-[30px] border-1 rounded-xl border-slate-300">
      <h3 className="font-semibold text-xl mb-[15px] text-slate-400">Aula {aula}</h3>
      
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p className="text-slate-400 font-semibold">Top</p>
        <input onClick={(e) => handleTopLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
        <div className="relative w-11 h-6 bg-slate-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-slate-400 rounded-full peer dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-blue-600 dark:peer-checked:bg-slate-400"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p className="text-slate-400 font-semibold">Bottom</p>
        <input id="bottom" onClick={(e) => handleBottomLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
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
        <p className="font-semibold">Top</p>
        <input onClick={(e) => handleTopLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
        <div className="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between mb-[15px]">
        <p className="font-semibold">Bottom</p>
        <input onClick={(e) => handleBottomLight(e)} type="checkbox" value="" className="sr-only peer" disabled={isActive}/>
        <div className="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
      </label>
      <span className="flex flex-row justify-around">
        <p className="font-semibold">Numero de Personas:</p>
        <p className="font-semibold">Intensidad de la luz:</p>
        </span>
    </div>
  )
}

