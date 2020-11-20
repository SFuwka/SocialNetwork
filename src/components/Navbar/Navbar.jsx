import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav_items}>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/profile"
        >
          <li className={styles.item}>Profile</li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/messages"
        >
          <li className={styles.item}>Messages</li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/music"
        >
          <li className={styles.item}>Music</li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/photo"
        >
          <li className={styles.item}>Photo</li>
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/settings"
        >
          <li className={styles.item}>Settings</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
