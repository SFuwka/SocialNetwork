import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <div>
        <img src={props.state.avaSrc} alt={props.state.name + " Avatar"} />
      </div>

      <div>
        <NavLink to={`/profile/${props.state.id}`} className={styles.title}>
          {props.state.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Friend;
