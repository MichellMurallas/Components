import React, { useState } from 'react'

export const TareasConUsememo = () => {

  const [tareas, setTareas] = useState([])

  const guadarTareas = e =>{
    e.preventDefault();

    const tareasAcualizadas = [...tareas, e.target.descripcion.value]
    setTareas(tarea => [...tarea, e.target.descripcion.value])
    setTareas(tareasAcualizadas)
  }
  return (
    <div>
      <h1>Mis tareas</h1>
      <form onSubmit={guadarTareas}>
        <input type="text" name='descripcion' placeholder='describa la tarea' />
        <input type="submit" value="Guardar"  />
      </form>
      <h3>Lista de tareas</h3>
      <ul>
        {
          tareas.map((tarea, indice)=>{
            return (
              <li key={indice}>
                {tarea}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
