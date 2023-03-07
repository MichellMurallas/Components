import React, { useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre, setNombre] = useState("")

  const asignarGestor = e =>{
    setNombre(e.target.value);
  }
  return (
    <div>
      <h1>Nombre del gestor: <br /> {nombre}</h1>
      <input type="text" onChange={asignarGestor} placeholder="Nombre del gestor" />
      <h2>Lista de empleados:</h2>
      <p>Los usuarios son gestionados por {nombre} y vienen de JsonPlaceholder..</p>
      <Empleados />
    </div>
  )
}
