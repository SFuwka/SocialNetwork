import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import styles from "./MessagesContainer.module.css";
import { Route } from "react-router-dom";
import NewMessage from "./Messages/NewMessage/NewMessage";

const MessagesContainer = (props) => {
  
  let msg = props.dialogsPage.dialogItems.map((dialog) => dialog.messages);
  const dispatch = props.dispatch;
  return (
    <div className={styles.messagesContainer}>
      <Dialogs
        dialogItems={props.dialogsPage.dialogItems}
        dispatch={props.dispatch}
      />
      <Route
        path="/messages/:id"
        render={(props) => (
          <Messages
            dispatch={dispatch}
            dialogId={props.match.params.id}
            msg={msg[props.match.params.id - 1]}
          />
        )}
      />
      <NewMessage
        newMessageBody={props.dialogsPage.newMessageBody}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default MessagesContainer;
