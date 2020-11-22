import React, { useEffect } from "react";
import { selectDialogCreator } from "../../../../redux/reducers/dialogsReducer";
import styles from "./Messages.module.css";

const Messages = (props) => {
  
  useEffect(()=>{
    props.dispatch(selectDialogCreator(props.dialogId))
  },[])
  
  let render = props.msg.map((m, i) => {
    if (m.self) {
      return (
        <div className={`${styles.selfMessage} ${styles.boxing}`} key={i}>
          <div className={styles.message}>{m.msg}</div>
        </div>
      );
    }
    return (
      <div className={`${styles.notSelfMessage} ${styles.boxing}`} key={i}>
        <div className={styles.message}>{m.msg}</div>
      </div>
    );
  });
  return <div className={styles.dialogs}>{render}</div>;
};

export default Messages;
