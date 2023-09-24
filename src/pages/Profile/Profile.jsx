import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import styles from "./Profile.module.scss";
import PostForm from "../../components/PostForm/PostForm";
import PostsList from "../../components/PostsList/PostsList";
import FilteredPostsList from "../../components/FilteredPostsList/FilteredPostsList";
const Profile = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const data = JSON.parse(localStorage.getItem("formData"));
  return (
    <div className={styles["Profile"]}>
      <section className={styles.header}>
        <div className={styles.bigRectangle}></div>
        <div className={styles.gray}></div>
        <div className={styles.white}></div>
        <div className={styles.absolute}>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            width={200}
            alt="prof"
          />

          <div className={styles.name}>
            <span>{data.first_name}</span>  
            <span> {data.middle_name}</span>  
            <span> {data.last_name}</span>
          </div>
          <div className={styles.info}>
            <span>{data.citizenship}</span>  
            <span> {data.email}</span>  
            <span> {data.phone_number}</span>
          </div>
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
        <div className={styles["profile-kukuha"]}>
          {activeButton === 1 && <PostsList />}
        </div>
        <div className={styles["profile-kukuha"]}>
          {activeButton === 2 && <FilteredPostsList />}
        </div>
        <div className={styles["profile-kukuha"]}>
          {activeButton === 3 && <PostsList />}
        </div>
        <div className={styles["profile-kukuha"]}>
          {activeButton === 4 && <PostForm />}
        </div>
      </section>
    </div>
  );
};

export default Profile;
