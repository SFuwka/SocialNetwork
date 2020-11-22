import React, { useEffect } from "react";
import { selectDialogCreator } from "../../../../redux/reducers/dialogsReducer";
import styles from "./Messages.module.css";

const Messages = ({ dialogId, msg, dispatch }) => {
  // TO_DO bug when reload and closing messages tab

  useEffect(() => {
    dispatch(selectDialogCreator(dialogId));
    // eslint-disable-next-line
  }, []);
  let render = msg.map((m, i) => {
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
