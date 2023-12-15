import React from 'react'
import styles from './Intro.module.css'
import Contact from '@/app/Contact/page'


const Intro = () => {
  return (
   
    <div className={styles.intro}>
<video autoPlay loop muted playsInline>
    <source src="chw.mp4" type="video/mp4" />
  </video>

</div>

  )
}

export default Intro