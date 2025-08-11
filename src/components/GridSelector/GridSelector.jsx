export const GridSelector = ({setGrid}) => {
  return (
    <div>
      <button onClick={() => setGrid('camera')}>Camaras</button>
      <button onClick={() => setGrid('lights')}>Luces</button>
    </div>
  )
}

