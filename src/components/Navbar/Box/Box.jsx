import React from "react";
import styles from "./Box.module.css";

const Box = ({ bgColor, title, price, width }) => {
  return (
    <div
      className={styles.box}
      style={{ backgroundColor: bgColor, width: width }}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>€{price}</span>
    </div>
  );
};

export default Box;
