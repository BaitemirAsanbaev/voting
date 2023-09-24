import React, { useState } from "react";
import styles from "./FullPost.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { agree, disagree } from "../../redux/postsSlice";
const FullPost = ({ id }) => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch()
  const post = posts[id-1];
  const [voted, setVoted] = useState(false)
  function disable(){
    setVoted(true)
  }
  return (
    <div className={styles.FullPost}>
      <div className={styles["post-header"]}>
        <div className={styles.author}>{post.author}</div>
        <div className={styles["votes"]}>
          <div className={styles.agreement}>{post.agreement} За</div>
          <div className={styles.disagreement}>{post.disagreement} Против</div>
        </div>
        <div className={styles["created-date"]}>{post.created_date}</div>
      </div>
      <h2 className={styles["post-title"]}>{post.title}</h2>
      <div className={styles["post-description"]}>{post.content}</div>
      <div className={styles["post-footer"]}>
        <button disabled={voted} style={voted?{color:"grey", borderColor:"grey"}:{}} onClick={()=>{dispatch(agree(id-1));disable()}} className={styles.agreement}>Согалсен</button>
        <button disabled={voted} style={voted?{color:"grey", borderColor:"grey"}:{}} onClick={()=>{dispatch(disagree(id-1));disable()}} className={styles.disagreement}>Не  согласен</button>
      </div>
      <div className={styles['comments']}>
        <hr></hr>
        <h2>Комментарии</h2>
        {post.comments.map((item)=>{
          return <div className={styles['comment']}>
            <div>{item.author}</div>
            <div>{item.content}</div>
            <div>{item.date}</div>
          </div>
        })}
      </div>
    </div>
  );
};

export default FullPost;
