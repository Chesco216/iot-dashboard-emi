export const CameraCard = ({aula, personas, luces}) => {
  return (
    <div className="border-1 border-slate-300 p-[30px] rounded-xl">
      <span className="flex flex-row items-center justify-between">
        <h3 className="font-semibold text-xl mb-[20px]">Aula {aula}</h3>
        <p className="bg-red-500 px-[10px] py-[2px] rounded-2xl">LIVE</p>
      </span>
      {/* <video src="" className="w-full"/> */}
      <img src="https://www.pmh.pt/Assets/Img/noticias/3cdc8de8.jpg"
        className="my-[15px] rounded-xl"
      />
      <span className="flex flex-row justify-around">
        <p className="text-slate-700 border-1 border-slate-300 rounded-lg px-[20px] py-[5px]">Personas: {personas}</p>
        <p className="text-slate-700 border-1 border-slate-300 rounded-lg px-[20px] py-[5px]">Luces: {luces ? 'Encendidas' : 'Apagadas'}</p>
      </span>
    </div>
  )
}

