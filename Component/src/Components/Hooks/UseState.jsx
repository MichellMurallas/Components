import { useState } from "react";


const MyUseState = () => {
  const [nombre, setNombre] = useState("Miguel")
  const cambiarNombre = e =>{
    setNombre(e.target.value)
    console.log(e.target)
  }
  
  return (
    <div>
      <h1>Aprendiendo useSatate</h1>
      <h3>{nombre}</h3>
      {/* <button onClick={cambiarNombre}>Cambiar Nombre</button> */}
      <input type="text" onChange={cambiarNombre} />
    </div>
  )
}

export default MyUseState;
