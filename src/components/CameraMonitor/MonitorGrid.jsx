import { CameraCard } from "./CameraCard"

export const MonitorGrid = () => {
  return (
    <div className="my-[40px] mx-[30px] border-1 border-slate-300 p-[30px] rounded-xl">
      <h1 className="font-semibold text-2xl">Monitoreo de aulas</h1>
      <p className="text-slate-600">Camaras de seguridad de las aulas</p>
      <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
        <CameraCard aula={101} personas={10} luces={true}/>
        {/* <CameraCard aula={102} personas={4} luces={false}/> */}
        {/* <CameraCard aula={103} personas={23} luces={false}/> */}
        {/* <CameraCard aula={104} personas={0} luces={true}/> */}
      </div>
    </div>
  )
}

