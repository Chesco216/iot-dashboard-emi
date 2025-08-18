import Hls from 'hls.js';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCamera } from '../../store/cameraStore';

export const CameraCard = ({aula, personas, luces}) => {

  const videoRef = useRef(null);

  const camera = useCamera(state => state.camera)

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    const initPlayer = () => {
      if (Hls.isSupported()) {
        hls = new Hls({
          maxBufferLength: 30,       // Aumenta el buffer (segundos)
          maxMaxBufferLength: 60,     // Máximo buffer permitido
          enableWorker: true,         // Usa Web Workers para mejor rendimiento
          lowLatencyMode: true,      // Reduce latencia
          backBufferLength: 10        // Mantiene segmentos anteriores en memoria
        });

        hls.loadSource('http://localhost:3001/stream/stream.m3u8');
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(e => console.error("Auto-play falló:", e));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Soporte nativo para Safari
        video.src = 'http://localhost:3001/stream/stream.m3u8';
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(e => console.error("Auto-play falló:", e));
        });
      }
    };

    initPlayer();

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <div className="border-1 border-slate-300 p-[30px] rounded-xl">
      <span className="flex flex-row items-center justify-between">
        <h3 className="font-semibold text-xl mb-[20px]">Aula {aula}</h3>
        <p className="bg-red-500 px-[10px] py-[2px] rounded-2xl">LIVE</p>
      </span>
      <div className='w-full rounded-xl overflow-hidden mb-[30px]'>
        {
          (camera) ? 
          <video
              ref={videoRef}
              controls
              autoPlay
              muted
              playsInline
              style={{ width: '100%', maxWidth: '800px' }}
            />
          :
          <img className='w-full rounded-xl overflow-hidden mb-[30px]' src='/noVideo.jpg'/>
        }
      </div>
      <span className="flex flex-row justify-around">
        <p className="text-slate-700 border-1 border-slate-300 rounded-lg px-[20px] py-[5px]">Personas: {personas}</p>
        <p className="text-slate-700 border-1 border-slate-300 rounded-lg px-[20px] py-[5px]">Luces: {luces ? 'Encendidas' : 'Apagadas'}</p>
      </span>
    </div>
  )
}

