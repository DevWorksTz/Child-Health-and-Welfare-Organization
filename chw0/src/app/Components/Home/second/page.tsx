import React from 'react'
import styles from './second.module.css'
import Image from 'next/image'

const Second = () => {
  return (
    <div className={styles.container}>
<div className={styles.rectangle}>
<svg width="400" height="110" className="bg-green">
  <rect width="300" height="100" />
</svg> 
</div>
    </div>
  )
}

export default Second
