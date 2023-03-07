import React, { useEffect, useState } from 'react'
import "./PaletaColores.css"

const Colores = () => {
  const [color, setColor] = useState("blue")
  // const darColor = ()=>{
  //   setColor = color:"red"
  // }
  const click = color =>{
    setColor(color)
  }

  useEffect(() => {
    cambiar = color
  }, [color])

  return (
    <div>
      <section>
        <div className='cajaazul'>azul</div>
        <div className='cajaverde'>verde</div>
        <div className='cajarojo'>rojo</div>

        {
         cambiar = <div className='cajanuevo'>nuevo</div>
        }
      </section>
      <button onClick={
        () => click("green")
      }>cambiar color</button>
    </div>
  )
}

export default Colores
