import React from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  let newPostData = React.createRef();

  const addPost = () => {
    props.addPost(newPostData.current.value);
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
