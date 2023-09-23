import React, { useState } from "react";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
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
            width="190"
            height="180"
            viewBox="0 0 188 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94 0C42.112 0 0 33.6 0 75C0 116.4 42.112 150 94 150C145.888 150 188 116.4 188 75C188 33.6 145.888 0 94 0ZM94 22.5C109.604 22.5 122.2 32.55 122.2 45C122.2 57.45 109.604 67.5 94 67.5C78.396 67.5 65.8 57.45 65.8 45C65.8 32.55 78.396 22.5 94 22.5ZM94 129C70.5 129 49.726 119.4 37.6 104.85C37.882 89.925 75.2 81.75 94 81.75C112.706 81.75 150.118 89.925 150.4 104.85C138.274 119.4 117.5 129 94 129Z"
              fill="#000000"
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
        <div >{activeButton === 1 && <ProfilePost />}</div>
        <div>{activeButton === 2 && <div>2</div>}</div>
        <div>{activeButton === 3 && <div>3</div>}</div>
        <div>{activeButton === 4 && <div>4</div>}</div>
      </section>
    </div>
  );
};

export default Profile;
