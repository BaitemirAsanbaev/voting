import styles from "./Post.module.scss";
import { Link } from "react-router-dom";

function Post({ data }) {
  return (
    <div className={styles.post}>
      <div className={styles["post-header"]}>
        <div className={styles.author}>{data.author}</div>
        <div className={styles["created-date"]}>{data.created_date}</div>
      </div>
      <div className={styles["post-title"]}>{data.title}</div>
      <div className={styles["post-description"]}>{ data.content.slice(0, 100)} ...</div>
      <div className={styles["post-footer"]}>
        <Link to={"post/"+data.id} className={styles["read-more"]}>Read More</Link>
        <div className={styles["votes"]}>
          <div className={styles.agreement}>{data.agreement} Votes</div>
          <div className={styles.disagreement}>{data.disagreement} Dislike</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
