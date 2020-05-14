import React, { useEffect } from 'react'
import styles from './Slider.module.css'
import Slide1 from '../Slide1/Slide1'
import Slide2 from '../Slide2/Slide2'
import Slide3 from '../Slide3/Slide3'

const Slider = props => {
  const handleScroll = () => {
    console.log('scroll')
  }

  // const main = () => {

  // }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // https://codepen.io/tari/pen/KzzzwX - css slider
  // https://codepen.io/WispProxy/pen/EyLWKg
  // https://codepen.io/supah/pen/zZaPeE - events

  return (
    <div className={styles.mainContainer}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <div class="slider">
        <input class="slider__nav" type="radio" name="slider" title="slide1" checked="checked"/>
        <input class="slider__nav" type="radio" name="slider" title="slide2"/>
        <input class="slider__nav" type="radio" name="slider" title="slide3"/>
        <input class="slider__nav" type="radio" name="slider" title="slide4"/>
        <div class="slider__inner">
          <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
            <h2 class="slider__caption">codepen</h2>
            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
            <h2 class="slider__caption">newspaper-o</h2>
            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-television"></i>
            <h2 class="slider__caption">television</h2>
            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
            <h2 class="slider__caption">diamond</h2>
            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
