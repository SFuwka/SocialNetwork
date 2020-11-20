import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img alt="avatar" src={process.env.REACT_APP_ERLICH_AVA_SRC} />
        </div>

        <ProfileInfo />
      </div>
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </>
  );
};

export default Profile;
