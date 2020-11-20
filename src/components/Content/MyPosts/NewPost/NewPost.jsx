import React from "react";
import { addPostActionCreator } from "../../../../redux/state";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  let newPostData = React.createRef();

  const addPost = () => {
    let text = newPostData.current.value;
    props.dispatch(addPostActionCreator(text));
  };

  return (
    <div className={styles.newPost}>
      <textarea
        ref={newPostData}
        name="post"
        placeholder="What is on your mind?"
      ></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  );
};

export default NewPost;
