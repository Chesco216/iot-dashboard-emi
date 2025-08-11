import { useState } from "react"
import { MonitorGrid } from "./components/CameraMonitor/MonitorGrid"
import { LightsGrid } from "./components/LighstControl/LightsGrid"
import { ResumeCards } from "./components/ResumeCards/ResumeCards"
import { Title } from "./components/Title"
import { GridSelector } from "./components/GridSelector/GridSelector"

function App() {

  const [grid, setGrid] = useState('camera')

  return (
    <div className="p-[40px]">
      <Title/>
      <ResumeCards/>
      <GridSelector setGrid={setGrid}/>
      {
        grid == 'camera' ?
          <MonitorGrid/>
        : grid =='lights' ?
          <LightsGrid/>
        : <p>Select grid</p>
      }
    </div>
  )
}

export default App
