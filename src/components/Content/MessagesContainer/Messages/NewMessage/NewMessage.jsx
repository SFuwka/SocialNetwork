import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageBodyCreator,
} from "../../../../../redux/reducers/dialogsReducer";
import styles from "./NewMessage.module.css";

const NewMessage = (props) => {
  const messageChangeHandler = (e) => {
    props.dispatch(updateNewMessageBodyCreator(e.target.value));
  };

  const sendMessageHandler = () => {
    
    props.dispatch(addMessageActionCreator());
  };

  return (
    <div className={styles.newMessage}>
      <textarea
        className={styles.input}
        value={props.newMessageBody}
        onChange={messageChangeHandler}
      ></textarea>
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
};

export default NewMessage;
