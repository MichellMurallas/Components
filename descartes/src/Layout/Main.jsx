import React from 'react'
import "./Layout.css"
// import ImageSlider from '../Componentest/sliders/ImageSlider'
// import { SliderData } from '../Componentest/sliders/SliderData'
import Recientes from '../Componentest/Discografia/recientes/Recientes'
// import Romanticas from '../Componentest/Discografia/romanticas/Romanticas'
// import Sexi from '../Componentest/Discografia/Sexi/Sexi'


const Main = () => {
  return (
    <div className='main'>
      {/* <ImageSlider slides={SliderData} /> */}
      <Recientes />
      {/* <Romanticas /> */}
      {/* <Sexi /> */}
    </div>
  )
}

export default Main
