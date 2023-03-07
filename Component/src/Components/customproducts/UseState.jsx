import { useState } from 'react'
import "./UseState.css"

export const UseState = () => {

  const [cambio, setCambio] = useState("#77b7c6")



  const colores = [ 
    "#50aa7f",
    "#aa7450",
    "#ff1100",
    "#e6ed07",
    "#73ff00",
    "#ff6600",
    "#04fbea",
    "#006eff",
    "#e600ff",
    "#fb006d",
    "#ad9407",
  ]

    const combi = () =>{
    setCambio=("#aa7050")
  }



  return (
    <>
  
      <h1>colores</h1>
      <button className="colorear" style={{background:colores[0]}} onClick={() => alert('Hola')} ></button>
      <button className="colorear" style={{background:colores[1]}} ></button>
      <button className="colorear" style={{background:colores[2]}} ></button>
      <button className="colorear" style={{background:colores[3]}} ></button>
      <button className="colorear" style={{background:colores[4]}} ></button>
      <button className="colorear" style={{background:colores[5]}} ></button>
      <button className="colorear" style={{background:colores[6]}} ></button> 
      <button className="colorear" style={{background:colores[7]}} ></button>
      <button className="colorear" style={{background:colores[8]}} ></button>
      <button className="colorear" style={{background:colores[9]}} ></button>
      <button className="colorear" style={{background:colores[10]}}></button>
      <div className="pintar" style={{background:cambio}}>

      </div>
    </>
  )
}


