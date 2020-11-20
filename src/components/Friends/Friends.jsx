import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let render = props.friendsList.friends.map((friend) => (
    <Friend key={friend.id} state={friend} />
  ));

  return (
    <div className={styles.friends}>
      <h3 className={styles.title}>Friends</h3>
      {render}
    </div>
  );
};

export default Friends;
