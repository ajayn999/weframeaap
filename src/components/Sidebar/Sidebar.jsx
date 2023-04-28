import styles from "./Sidebar.module.css";
import { sidebarData } from "../../assets/data";
import { BsArrowLeft } from "react-icons/bs";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={styles.container}
      style={{ width: open ? "270px" : "70px" }}
    >
      <div className={styles.heading}>
        <div className={styles.arrow} onClick={() => setOpen(!open)}>
          <BsArrowLeft />
        </div>
        {open && <img src="/images/logo.png" alt="logo" />}
      </div>
      <div className={styles.sideData}>
        {sidebarData.map((item) => {
          return (
            <div className={styles.data} key={item.id}>
              <img src={`/images/icons/${item.icon}.svg`} alt="icon" />
              {open && <span>{item.label}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
