import React from 'react'
import styles from "./BoxCard.module.css"

const BoxCard = ({ children }) => {
  return (
    <div className={styles.box__card}>
        {children}
    </div>
  )
}

export default BoxCard