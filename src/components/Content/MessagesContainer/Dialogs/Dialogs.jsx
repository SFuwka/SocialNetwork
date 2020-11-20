import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.css";



const Dialogs = (props) => {
  
  let render = props.dialogItems.map((dialog) => (
    <Dialog key={dialog.id} to={`/messages/${dialog.id}`} name={dialog.name} />
  ));
  return <div className={styles.dialogs}>{render}</div>;
};

export default Dialogs;
