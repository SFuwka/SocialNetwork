import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
      <ul>
        <li className={`${styles.item} ${styles.itemName}`}>Erlich Bachman</li>
        <li className={styles.item}>
          <span className={styles.itemDesc}>Gender:</span> Man
        </li>
        <li className={styles.item}>
          <span className={styles.itemDesc}>Age:</span> 32
        </li>
        <li className={styles.item}>
          <span className={styles.itemDesc}>Address:</span> Tibet, China 
        </li>
        <li className={styles.item}>
          <span className={styles.itemDesc}>Hair:</span> color Orange
        </li>
      </ul>
    </div>
  );
};
export default ProfileInfo;
