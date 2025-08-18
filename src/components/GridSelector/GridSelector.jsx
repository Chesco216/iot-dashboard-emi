import { useState } from "react"

export const GridSelector = ({grid, setGrid}) => {

  const [active, setActive] = useState({
    camera: (grid == 'camera') ? true : false,
    lights: (grid == 'lights') ? true : false
  })

  return (
    <div className="flex flex-row items-center bg-slate-100 w-fit mt-[30px] p-[5px] gap-[5px] rounded-lg">
      <label 
        className={(active.camera) ? 'rounded-lg py-[5px] px-[30px] bg-white font-semibold text-black' : 'py-[5px] px-[30px] font-semibold text-slate-400'}
        onClick={() => {
          setGrid('camera')
          setActive({
            camera: true,
            lights: false
          })
        }}
      >Camaras</label>
      <label 
        className={(active.lights) ? 'rounded-lg py-[5px] px-[30px] bg-white font-semibold text-black' : 'py-[5px] px-[30px] font-semibold text-slate-400'}
        onClick={() => {
          setGrid('lights')
          setActive({
            camera: false,
            lights: true
          })
        }}>Luces</label>
    </div>
  )
}
