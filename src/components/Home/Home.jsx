import React from "react";
import styles from "./Home.module.css";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";
import Searchbar from "../Searchbar/Searchbar";
import ListTable from "../ListTable/ListTable";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.header__wrapper}>
          <HeaderWrapper />
        </div>
      </div>

      <div className={styles.row}>
        <p className={styles.row__heading}>Per Client</p>
        <Searchbar />
        <ListTable />
      </div>
    </div>
  );
};

export default Home;
