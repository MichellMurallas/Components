import React, { useState } from 'react'

const FormConsDatos = () => {
  const [usuario, setusuario] = useState({})

  let conseguirDatos = e =>{
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value
    }
    console.log(usuario);
    setusuario(usuario);
  }
  return (
    <div>
      <div>
        {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es {usuario.biografia}
      </div>
      <form onSubmit={conseguirDatos} >
        <input type="text"
               placeholder='Nombre'
               name='nombre' 
               />
        <input type="text"
               placeholder='Apellido'
               name='apellido' 
               />
        <select name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder='biografia'
                  name='biografia'
                  >Biografia
        </textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default FormConsDatos;
