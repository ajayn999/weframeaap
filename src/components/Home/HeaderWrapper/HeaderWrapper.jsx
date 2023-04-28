import React from "react";
import styles from "./HeaderWrapper.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const HeaderWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>Recurring Invoices</h1>
        <button className={styles.button}>
          <span>Add recurring invoice</span>
          <AiOutlinePlus />
        </button>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <p className={styles.card__title}># recurring invoices</p>
            <h5 className={styles.card__subtitle}>215</h5>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.card}>
            <p className={styles.card__title}>recurring revenue</p>
            <h5 className={styles.card__subtitle}>
              €2500 <span>/month</span>
            </h5>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.card}>
            <p className={styles.card__title}>recurring overdue</p>
            <h5 className={styles.card__subtitle}>22</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
