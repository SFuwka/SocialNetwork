import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import { selectDialogCreator } from "../../../../../redux/state";
const Dialog = (props) => {
  const selecDialogtHandler = () => {
    props.dispatch(selectDialogCreator(props.id));
  };

  return (
    <div>
      <div className={styles.dialog}>
        <NavLink
          onClick={selecDialogtHandler}
          activeClassName={styles.active}
          to={props.to}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Dialog;
