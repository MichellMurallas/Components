import React, { useEffect, useState } from 'react'

export const Empleados = ({pagina =1} ) => {

  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    conseguirEmpleados(pagina)
  }, [])

  const conseguirEmpleados = async(p)=>{
    const url = "https://reqres.in/api/users?page" + p;
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();

    setEmpleados(empleados)
    console.log(empleados)
  }


  return (
    <div>
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
