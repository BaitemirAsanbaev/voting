import React from "react";
import styles from "./FullPost.module.scss";
import { useSelector } from "react-redux";
const FullPost = ({ id }) => {
  const posts = useSelector((state) => state.posts.posts);
  const post = posts[id];
  return (
    <div className={styles.FullPost}>
      <div className={styles["post-header"]}>
        <div className={styles.author}>{post.author}</div>
        <div className={styles["votes"]}>
          <div className={styles.agreement}>{post.agreement} Votes</div>
          <div className={styles.disagreement}>{post.disagreement} Dislike</div>
        </div>
        <div className={styles["created-date"]}>{post.created_date}</div>
      </div>
      <h2 className={styles["post-title"]}>{post.title}</h2>
      <div className={styles["post-description"]}>{post.content}</div>
      <div className={styles["post-footer"]}>
        <button className={styles.agreement}>Agree</button>
        <button className={styles.disagreement}>Disgree</button>
      </div>
    </div>
  );
};

export default FullPost;
