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
      <Card element={<DeviceSVG w={30} h={30} c='#27F54D'/>} title='Dispositivos activos' value='10/10'/>
      <Card element={<LabsSVG w={30} h={30} c='#F5DD27'/>} title='Laboratorios activos' value='2/8'/>
      <Card element={<LightSVG w={30} h={30} c='#A927F5'/>} title='Luces Encendidas' value='10/20'/>
      <Card element={<CameraSVG w={30} h={30} c='#27E0F5'/>} title='Camaras activas' value='8/10'/>
    </div>
  )
}

