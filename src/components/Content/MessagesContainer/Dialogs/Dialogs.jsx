import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  let render = props.dialogItems.map((dialog) => (
    <Dialog
      id={dialog.id}
      key={dialog.id}
      to={`/messages/${dialog.id}`}
      name={dialog.name}
      dispatch={props.dispatch}
    />
  ));
  return <div className={styles.dialogs}>{render}</div>;
};

export default Dialogs;
