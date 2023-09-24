import React, { useState } from "react";
import Post100 from "../../components/Posts100/Posts100";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import Search from "../../components/Search/Search";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [activeButton, setActiveButton] = useState(null);

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
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="90" cy="90" r="90" fill="white" />
            <path
              d="M90 0C40.32 0 0 40.32 0 90C0 139.68 40.32 180 90 180C139.68 180 180 139.68 180 90C180 40.32 139.68 0 90 0ZM90 27C104.94 27 117 39.06 117 54C117 68.94 104.94 81 90 81C75.06 81 63 68.94 63 54C63 39.06 75.06 27 90 27ZM90 154.8C67.5 154.8 47.61 143.28 36 125.82C36.27 107.91 72 98.1 90 98.1C107.91 98.1 143.73 107.91 144 125.82C132.39 143.28 112.5 154.8 90 154.8Z"
              fill="#726E6E"
            />
          </svg>

          <h4>User Name</h4>
          <span>+996999666999</span>
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
        <div>{activeButton === 1 && <ProfilePost />}</div>
        <div>{activeButton === 2 && <Post100 />}</div>
        <div>{activeButton === 3 && <Search />}</div>
        <div>{activeButton === 4 && <div>4</div>}</div>
      </section>
    </div>
  );
};

export default Profile;
