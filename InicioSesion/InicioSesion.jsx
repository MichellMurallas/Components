import React from 'react'
import "./InicioSesion.css" 
import styled from 'styled-components'

const Containt__inicioSesion = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow:none;
  background-color: rgb(176, 173, 169);
  width: 100%;
`
const InicioSesion__login = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 682px;
`

const InicioSesion__register = styled.div`
  display: flex;
  justify-content: center;
  width: 682px;
`
const InicioSesion__sub_register_btn = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 100px;
`


const InicioSesion__facebook = styled.div`
  border-top: 2px solid black;
  width: 100px;
  text-align: center;
`









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
    <Containt__inicioSesion>


      <InicioSesion__login>
        
        <form onSubmit={getForm} className='inicioSesion__form'>
          <label htmlFor="email">Email o Usuario</label>
          <input name='email' type="email" placeholder='Email o Usuario' />
          <label htmlFor="password">Contraseña</label>
          <input name='password' type="password" placeholder='Contraseña' />
          <input type="submit" value="Ingresar" />
        </form>
        <p>¿Olvidaste tu contraseña?</p>
        <InicioSesion__login className='inicioSesion__forget'>
          
          <InicioSesion__facebook>
            <p>Google</p>
          </InicioSesion__facebook>
            <div>
              <p>o</p>
            </div>      
          <InicioSesion__facebook>
            <p>Facebook</p>
          </InicioSesion__facebook>
        </InicioSesion__login>
      </InicioSesion__login>


  <div>
  
    <InicioSesion__register>

      <div className="inicioSesion__sub-register">
          <h4>Registrarse</h4>
            <p>Crearse una cuenta tiene muchos beneficios</p>
            <ul>
              <li>Guardar diseños</li>
              <li>Seguimiento de pedidos</li>
              <li>Accede a descuentos</li>
            </ul>

            <InicioSesion__sub_register_btn>
              Registrarse
            </InicioSesion__sub_register_btn>
      </div>
    </InicioSesion__register>
      
  </div>
</Containt__inicioSesion>

    </>
  )
}

export default InicioSesion;
