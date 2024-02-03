import React from 'react'
import styles from './third.module.css'
import { League_Spartan } from 'next/font/google'
const inter = League_Spartan({ subsets: ['latin'] })

const Third = () => {
  return (
    <div className={styles.third}>
  
        <div className={styles.container}>
        <div className={styles.header}>
        <h1 className={inter.className}>News</h1>
      </div>
      <div className={styles.grids}>
          <div className={styles.cols}>
            <div className={styles.fig}>
              IMAGE
            </div>
            <div className={styles.link}>
              TITLE TO LINK
            </div>
          </div>
          <div className={styles.cols}>
          <div className={styles.fig}>
              IMAGE
            </div>
            <div className={styles.link}>
              TITLE TO LINK
            </div>
          </div>
          <div className={styles.cols}>
          <div className={styles.fig}>
              IMAGE
            </div>
            <div className={styles.link}>
              TITLE TO LINK
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Third