import React, { useState, useEffect } from 'react';
import { LightsGrid } from "./components/LighstControl/LightsGrid"
import { ResumeCards } from "./components/ResumeCards/ResumeCards"
import { Title } from "./components/Title"

function App() {

  return (
    <div className="p-[40px] snap-none">
      <Title/>
      <ResumeCards/>
      <LightsGrid/>
    </div>
  )
}

export default App
