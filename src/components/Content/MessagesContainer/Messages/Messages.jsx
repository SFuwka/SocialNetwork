import React from "react";
import styles from "./Messages.module.css";

const Messages = (props) => {
  let render = props.msg.map((m,i) => <div key={i}>{m}</div>);
  return <div className={styles.dialogs}>{render}</div>;
};

export default Messages;
