import React, { useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Slide1 from '../Slide1/Slide1'
import Slide2 from '../Slide2/Slide2'
import Slide3 from '../Slide3/Slide3'

const Slider = props => {
  const [activeVerticalSlide, setActiveVerticalSlide] = useState(1)
  const maxNumVSlides = 3
  let pagination = []

  const handleScroll = () => {
    console.log('scroll')
  }

  const getSliderInnerStyle = (numSlides, currentSlide) => {
    const percent = -100 * (currentSlide - 1) / numSlides
    return {
      'WebkitTransform': `translateY(${percent}%)`,
      'transform': `translateY(${percent}%)`,
    }
  }

  const [sliderInnerStyle, setSliderInnerStyle] = useState(getSliderInnerStyle(maxNumVSlides, 1))

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // https://codepen.io/tari/pen/KzzzwX - css slider
  // https://codepen.io/WispProxy/pen/EyLWKg
  // https://codepen.io/supah/pen/zZaPeE - events

  const onPaginationClick = (activeElement, event) => {
    setSliderInnerStyle(getSliderInnerStyle(maxNumVSlides, activeElement))
    setActiveVerticalSlide(activeElement)
  }

  for (let index = 1; index <= maxNumVSlides; index++) {
    const isActive = index === maxNumVSlides ? activeVerticalSlide >= index : activeVerticalSlide === index

    pagination.push(<div
      className={styles.circle + (isActive ? ' ' + styles.circle_active : '')}
      key={index}
      onClick={(e) => onPaginationClick(index, e)}
    ></div>)
  }

  return (
    <div className={styles.slider}>
      <div
        className={`${styles.mainContainer} ${styles.slider__inner}`}
        style={sliderInnerStyle}
        onScroll={handleScroll}
      >
        <Slide1 className={styles.slider__contents} />
        <Slide2 className={styles.slider__contents} />
        <Slide3 className={styles.slider__contents} />
      </div>
      <div className={styles.pagination}>
        {pagination}
      </div>
    </div>
  )
}

export default Slider
