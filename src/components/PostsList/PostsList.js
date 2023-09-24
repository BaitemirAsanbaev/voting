import React, { useEffect } from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import { api } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/postsSlice';

const PostsList = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(api + "posts/")
      .then(res => {
        // Assuming the response data is an array of posts
        const fetchedPosts = res.data;

        // Dispatch the addPost action for each fetched post
        fetchedPosts.forEach(post => {
          dispatch(addPost(post));
        });
      })
      .catch(e => console.error(e.message));
  }, [dispatch]);

  return (
    <div>
      {posts.map((item, id) => {
        return <Post key={id} data={item} />;
      })}
    </div>
  );
}

export default PostsList;
