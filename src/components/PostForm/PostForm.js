import React, { useState } from "react";
import axios from "axios";
import styles from "./PostForm.module.scss"; // Import the SCSS styles
import { api } from "../../api";

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    email:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");
    console.log([api + "posts/create/", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }]);

    axios
      .post(api + "posts/create/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response data (e.g., confirmation of the post creation)
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Request failed:", error);
      });

    // Clear form fields after submission
    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="content" className={styles.label}>
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
