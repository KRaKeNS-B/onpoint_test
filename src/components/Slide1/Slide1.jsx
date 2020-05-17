import React from 'react'
import styles from './Slide1.module.css'

const Slide1 = props => {
  return (
    <div className={styles.slide_container + ' ' + props.className}>
      <div className={styles.slide_header}>
        <div>Всегда ли цели терапии СД2</div>
        <div>на поверхности?</div>
      </div>
      <div className={styles.slide_target}>Цель по HbA1c</div>
      <div className={styles.slide_hypogl}>Гипогликемия</div>
      <div className={styles.slide_complicationsSD}>Осложнения СД</div>
      <div className={styles.slide_SSrisks}>СС риски</div>
      <div className={styles.slide_ellipse}>
        <div className={styles.slide_ellipse__child}></div>
        <div className={styles.slide_ellipse__child2}></div>
      </div>
      {/* <div className={styles.slide_ellipse}></div>
      <div className={styles.slide_ellipse}></div>
      <div className={styles.slide_ellipse}></div> */}
    </div>
  )
}

export default Slide1
