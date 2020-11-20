import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
const Dialog = (props) => {
  return (
    <div>
      <div className={styles.dialog}>
        <NavLink activeClassName={styles.active} to={props.to}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Dialog;
