import React, { useState } from 'react'

const MyForm = () => {
  const [usuario, setUsuario] = useState({})

  const infoUsuario = e =>{
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value
    }
    setUsuario(usuario)
  }
  return (
    <div>

      <form onSubmit={infoUsuario} >
        <input type="text" placeholder='Nombre' name='nombre' />
        <input type="text" placeholder='Apellido' name='apellido' />
        <select name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea name="biografia">Biografia</textarea>
        <input type="submit" value="Enviar" />
      </form>
      <br />
      <div>
        Nombre de Usuario: {usuario.nombre } <br />
      Apellido: <i>{usuario.apellido }</i><br />
      Genero: <i>{usuario.genero} </i><br />
      Breve descripcion de su Biografia: <br />
      {usuario.biografia}

      </div>
    </div>
  )
}

export default MyForm;
