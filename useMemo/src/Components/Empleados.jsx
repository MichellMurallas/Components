import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
  ({pagina} ) => {

    const [empleados, setEmpleados] = useState([])
  
    useEffect(() => {
      conseguirEmpleados(pagina)
    }, [pagina])
  
    const conseguirEmpleados = async(p)=>{
      const url = "https://reqres.in/api/users?page="+p;
      const peticion = await fetch(url);
      const {data: empleados} = await peticion.json();
  
      setEmpleados(empleados)
      console.log(empleados)
    }

    useEffect(() => {
    
    }, [empleados])
  
  
    return (
      <div>
        <p>Mostrnado la pagina: {pagina}</p>
        <ul>
          {
            empleados.map((empleado)=>{
              return(
                <li key={empleado.id}>
                  {empleado.first_name + " " + empleado.email }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
)
