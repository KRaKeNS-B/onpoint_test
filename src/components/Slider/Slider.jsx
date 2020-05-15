import React, { useState } from 'react'
import styles from './Slider.module.css'
import Slide1 from '../Slide1/Slide1'
import Slide2 from '../Slide2/Slide2'
import Slide3 from '../Slide3/Slide3'

const Slider = props => {
  const [activeVerticalSlide, setActiveVerticalSlide] = useState(1)
  const [scrollingIsActive, setScrollingIsActive] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)

  const maxNumVSlides = 3
  const scrollingTime = 800
  let pagination = []

  const getSliderInnerStyle = (numSlides, currentSlide) => {
    const percent = -100 * (currentSlide - 1) / numSlides
    return {
      'WebkitTransform': `translateY(${percent}%)`,
      'transform': `translateY(${percent}%)`,
    }
  }

  const [sliderInnerStyle, setSliderInnerStyle] = useState(getSliderInnerStyle(maxNumVSlides, 1))

  const changePage = (currentElement) => {
    setSliderInnerStyle(getSliderInnerStyle(maxNumVSlides, currentElement))
    setActiveVerticalSlide(currentElement)
  }

  const wheelTimeout = () => {
    setScrollingIsActive(true)
    setTimeout(
      () => {
        return setScrollingIsActive(false);
      },
      scrollingTime
    )
  }

  const scrollingUp = () => {
    if (activeVerticalSlide + 1 <= maxNumVSlides) {
      changePage(activeVerticalSlide + 1)
      wheelTimeout()
    }
  }

  const scrollingDown = () => {
    if (activeVerticalSlide - 1 > 0) {
      changePage(activeVerticalSlide - 1)
      wheelTimeout()
    }
  }

  const mouseWheelEvent = (e) => {
    if (scrollingIsActive) {
      return
    }

    if (e.deltaY > 0 || e.detail < 0) {
      scrollingUp()
    }
    else if (e.deltaY < 0 || e.detail > 0) {
      scrollingDown()
    }
  }

  const handleTouchStart = (e) => {
    if (scrollingIsActive) {
      return;
    }

    setTouchStartY(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e) => {
    if (scrollingIsActive) {
      return;
    }

    const touchEndX = e.targetTouches[0].clientY

    if (touchStartY - touchEndX < -200) {
      scrollingDown()
    } else if (touchStartY - touchEndX > 200) {
      scrollingUp()
    }
  }

  // https://codepen.io/tari/pen/KzzzwX - css slider
  // https://codepen.io/WispProxy/pen/EyLWKg
  // https://codepen.io/supah/pen/zZaPeE - events

  const onPaginationClick = (currentElement, event) => {
    changePage(currentElement)
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
        onWheel={mouseWheelEvent}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
