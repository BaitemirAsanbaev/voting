import React, { useState } from "react";
import styles from "./Profile.module.scss";
import PostForm from "../../components/PostForm/PostForm";
import PostsList from "../../components/PostsList/PostsList";
import FilteredPostsList from "../../components/FilteredPostsList/FilteredPostsList";
const Profile = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className={styles["Profile"]}>
      <section className={styles.header}>
        <div className={styles.bigRectangle}></div>
        <div className={styles.gray}></div>
        <div className={styles.white}></div>
        <div className={styles.absolute}>
          <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="prof"/>

          <h4>{localStorage.getItem('user')}</h4>
        </div>
      </section>

      <section className={styles.body}>
        <div>
          <button
            className={
              activeButton === 1
                ? `${styles.myPosts} ${styles.active}`
                : styles.myPosts
            }
            onClick={() => handleButtonClick(1)}
          >
            мои посты
          </button>
          <button
            className={
              activeButton === 2
                ? `${styles.myPosts} ${styles.active}`
                : styles.myPosts
            }
            onClick={() => handleButtonClick(2)}
          >
            Посты 1000+
          </button>
          <button
            className={
              activeButton === 3
                ? `${styles.myPosts} ${styles.active}`
                : styles.myPosts
            }
            onClick={() => handleButtonClick(3)}
          >
            уведомление
          </button>
          <button
            className={
              activeButton === 4
                ? `${styles.myPosts} ${styles.active}`
                : styles.myPosts
            }
            onClick={() => handleButtonClick(4)}
          >
            создать посты
          </button>
        </div>
      </section>
      <section className={styles.block}>
        <div >{activeButton === 1 && <PostsList/>}</div>
        <div>{activeButton === 2 && <div><FilteredPostsList/></div>}</div>
        <div>{activeButton === 3 && <div>3</div>}</div>
        <div>{activeButton === 4 && <div><PostForm/></div>}</div>
      </section>
    </div>
  );
};

export default Profile;
