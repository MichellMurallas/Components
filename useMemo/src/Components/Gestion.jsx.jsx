import React, { useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre, setNombre] = useState("")
  const [pagina, setPagina] = useState(1)

  const asignarGestor = e =>{
    setNombre(e.target.value);
  }

  useEffect(() => {
  
  }, [nombre, pagina])
  return (
    <div>
      <h1>Nombre del gestor: <br /> {nombre}</h1>
      <input type="text" onChange={asignarGestor} placeholder="Nombre del gestor" />
      <h2>Lista de empleados:</h2>
      <p>Los usuarios son gestionados por {nombre} y vienen de JsonPlaceholder..</p>
      <button onClick={() =>{setPagina(1)}}>pagina 1</button>
      <button onClick={() =>{setPagina(2)}}>pagina 2</button>
      <Empleados pagina={pagina} />
    </div>
  )
}
