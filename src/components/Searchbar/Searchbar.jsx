import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.searchBox}>
      <input
        id="search"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search client"
      />
      <button className={styles.button}>
        <span>Search</span>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Searchbar;
