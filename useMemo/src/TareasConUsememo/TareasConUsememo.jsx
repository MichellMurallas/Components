import React, { useState } from 'react'

export const TareasConUsememo = () => {

  const [tareas, setTareas] = useState([])

  const guadarTareas = e =>{
    e.preventDefault();

    const tareasAcualizadas = [...tareas, e.target.descripcion.value]
    setTareas(tarea => [...tarea, e.target.descripcion.value])
    setTareas(tareasAcualizadas)
  }

  const borrarTarea = id => {
   //Filtrar para borrar la que no se desea:
   let nuevasTareas = tareas.filter((tarea, indice)=> indice !== id);

   //guardar el nuevo listado de tareas en el listado:
   setTareas(nuevasTareas);
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
                <button onClick={()=>borrarTarea(indice)}>X</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
