import React from 'react'
import styles from './Slide1.module.css'
import Ellipse from '../Ellipse/Ellipse'

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
      <Ellipse
        position={{
          left: 561,
          top: 262,
        }}
        diameter={53}
        animationName={'ripple1'}
      />
      <Ellipse
        position={{
          left: 274,
          top: 427,
        }}
        diameter={27}
        animationName={'ripple2'}
      />
      <Ellipse
        position={{
          left: 479,
          top: 538,
        }}
        diameter={15}
        animationName={'ripple3'}
      />
      <Ellipse
        position={{
          left: 822,
          top: 517,
        }}
        diameter={15}
        animationName={'ripple4'}
      />
    </div>
  )
}

export default Slide1
