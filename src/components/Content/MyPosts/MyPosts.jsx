import React from "react";
import styles from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let render = props.profilePage.postsData.map((post) => (
    <Post
      key={post.id}
      name={post.name}
      msg={post.msg}
      avaSrc={post.avaSrc}
      likesCount={post.likesCount}
    />
  ));
  return (
    <div className={styles.myPosts}>
      <NewPost dispatch={props.dispatch} />
      {render}
    </div>
  );
};
export default MyPosts;
