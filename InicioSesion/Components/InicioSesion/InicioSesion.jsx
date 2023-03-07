import React from 'react'
import "./InicioSesion.css" 

const InicioSesion = () => {

  const getForm =e=>{
    e.preventDefault();
    let datos = e.target;
    let user = {
      email: datos.email.value,
      password: datos.password.value
    }
    console.log(user)
  }
  return (
    <>
    <h2>Iniciar sesión</h2>
    <hr />
    <div className='containt__inicioSesion'>


      <div className='inicioSesion__login'>
        
        <form onSubmit={getForm} className='inicioSesion__form'>
          <label htmlFor="email">Email o Usuario</label>
          <input name='email' type="email" placeholder='Email o Usuario' />
          <label htmlFor="password">Contraseña</label>
          <input name='password' type="password" placeholder='Contraseña' />
          <input type="submit" value="Ingresar" />
        </form>
        <p>¿Olvidaste tu contraseña?</p>
        <div className='inicioSesion__forget'>
          
          <div className='inicioSesion__google'>
            <p>Google</p>
          </div>
          <div>
            <p>o</p>
          </div>
          
          <div className='inicioSesion__facebook'>
            <p>Facebook</p>
          </div>
        </div>
      </div>


<div>
  
<div className="inicioSesion__register">
        
        <div className="inicioSesion__sub-register">
        <h4>Registrarse</h4>
          <p>Crearse una cuenta tiene muchos beneficios</p>
          <ul>
            <li>Guardar diseños</li>
            <li>Seguimiento de pedidos</li>
            <li>Accede a descuentos</li>
          </ul>
          <button className="inicioSesion__sub-register-btn">Registrarse</button>
        </div>
      </div>
      
    </div>
</div>

    </>
  )
}

export default InicioSesion;
