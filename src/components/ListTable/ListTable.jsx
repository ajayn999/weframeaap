import React, { useState } from "react";
import styles from "./ListTable.module.css";
import { clientData, editCardData } from "../../assets/data";
import { BsChevronRight } from "react-icons/bs";

const ListTable = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headRow}>
            <th>CLIENT</th>
            <th># SEND</th>
            <th>END DATE</th>
            <th>INTERVAL</th>
            <th>AMOUNT</th>
            <th>EDIT</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {clientData &&
            clientData.map((item) => {
              return (
                <tr key={item.id} className={styles.bRow}>
                  <td>
                    <div className={styles.tdImg}>
                      <img src={item.image} alt="images" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{item.send}</td>
                  <td>{item.endDate}</td>
                  <td>{item.interval}</td>
                  <td>{item.ammount}</td>
                  <td className={styles.edit}>
                    <button
                      className={styles.tbutton}
                      onClick={() => setOpen(!open)}
                    >
                      <span>Edit</span>
                      <BsChevronRight />
                    </button>

                    {open  && (
                      <div className={styles.card}>
                        {editCardData.map((item, index) => {
                        
                          return (
                            <span key={index} className={styles.cardText}>
                              {item.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
