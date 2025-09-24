import {
  CameraSVG,
  DeviceSVG,
  LabsSVG,
  LightSVG
} from '../SVGs'
import { Card } from './Card'

export const ResumeCards = () => {
  return (
    <div className='flex flex-row justify-around mt-[40px]'>
      <Card element={<DeviceSVG w={30} h={30} c='#27F54D'/>} title='Dispositivos activos' value='1/1'/>
      <Card element={<LabsSVG w={30} h={30} c='#F5DD27'/>} title='Aulas activas' value='1/1'/>
      <Card element={<LightSVG w={30} h={30} c='#A927F5'/>} title='Luces Encendidas' value='1/1'/>
      <Card element={<CameraSVG w={30} h={30} c='#27E0F5'/>} title='Camaras activas' value='1/1'/>
    </div>
  )
}

