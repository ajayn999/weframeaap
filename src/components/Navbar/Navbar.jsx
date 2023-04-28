import React from "react";
import BoxCard from "./BoxCard/BoxCard";
import styles from "./Navbar.module.css";
import Box from "./Box/Box";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ open }) => {
  return (
    <header className={styles.header}>
      <div style={{ width: open ? "270px" : "100px" }}></div>
      <div className={styles.navbar}>
        <div className={styles.box1}>
          <BoxCard>
            <p className={styles.textDay}>Last 30 days</p>
            <div className={styles.box__card}>
              <Box bgColor="#48C446" title="Paid" price="24.000" width="87px" />
              <Box
                bgColor="#BDBDBD"
                title="Pending"
                price="41.000"
                width="128px"
              />
              <Box
                bgColor="#EC615B"
                title="Overdue"
                price="65.600"
                width="189px"
              />
            </div>
          </BoxCard>
        </div>

        <BoxCard>
          <div>
            <img
              className={styles.avatar}
              src="/images/avatar.png"
              alt="avatar"
            />
          </div>
          <p className={styles.nameText}>Jort KKKKKKKKKKKK</p>
        </BoxCard>
      </div>
    </header>
  );
};

export default Navbar;
