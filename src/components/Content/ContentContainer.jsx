import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Profile from "./Profile/Profile";
import styles from "./ContentContainer.module.css";
import { Route } from "react-router-dom";
import Music from "./Music/Music";
import Photo from "./Photo/Photo";
import Settings from "./Settings/Settings";
import MessagesContainer from "./MessagesContainer/MessagesContainer";

const ContentContainer = (props) => {
  
  return (
    <div className={styles.contentContainer}>
      <Jumbotron />
      <Route
        path="/profile"
        render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}
      />
      <Route
        path="/messages"
        render={() => <MessagesContainer messagesPage={props.state.messagesPage} />}
      />
      <Route path="/music" component={Music} />
      <Route path="/photo" component={Photo} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default ContentContainer;
