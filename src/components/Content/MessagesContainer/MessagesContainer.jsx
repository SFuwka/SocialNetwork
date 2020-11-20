import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import styles from "./MessagesContainer.module.css";
import { Route } from "react-router-dom";



const MessagesContainer = (props) => {
  let msg = props.messagesPage.messages.map((message) => message.msg);
  return (
    <div className={styles.messagesContainer}>
      <Dialogs dialogItems={props.messagesPage.dialogItems} />
      <Route path="/messages/:id" render={(props) => <Messages msg={msg[props.match.params.id-1]} />} />
    </div>
  );
};

export default MessagesContainer;
