import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { MonitorGrid } from "./components/CameraMonitor/MonitorGrid"
import { LightsGrid } from "./components/LighstControl/LightsGrid"
import { ResumeCards } from "./components/ResumeCards/ResumeCards"
import { Title } from "./components/Title"
import { GridSelector } from "./components/GridSelector/GridSelector"

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  const [grid, setGrid] = useState('lights')

  return (
    <div className="p-[40px] snap-none">
      <Title/>
      <ResumeCards/>
      <GridSelector setGrid={setGrid} grid={grid}/>
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
