import React from 'react'
import styles from './Intro.module.css'
import { League_Spartan } from 'next/font/google'
const inter = League_Spartan({ subsets: ['latin'] })

const Intro = () => {
  return (
   
    <div className={styles.intro}>
<video autoPlay loop muted playsInline>
    <source src="chw.mp4" type="video/mp4" />
  </video>
<div className={styles.card}>
  <div className={styles.h1}>
  <h1 className={inter.className}>Empowering</h1>
  </div>
  <div className={styles.h1}>
  <h1 className={inter.className}>the future of</h1>
  </div>
  <div className={styles.h1}>
  <h1 className={inter.className}>every child</h1>
  </div>
</div>
<div className={styles.text}>
  <div className={styles.p}><p>At the Children’s Health & Wellness Center, we believe that every child deserves to be healthy and happy.</p></div>
</div>
</div>

  )
}

export default Intro