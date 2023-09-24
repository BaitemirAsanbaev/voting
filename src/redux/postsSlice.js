// postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [{
    id:1, 
    title:'Huita',
    author:"baitemir",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor.",
    comments:[{author:"Bait", content:"я ебал всех в рот", date:"12-12-2002"}],
    agreement:230,
    disagreement:20,
    answer:"You are stupid",
    created_date:"12-12-2020"
  },
  {
    id:2, 
    title:'Huita',
    author:"baitemir",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor.",
    comments:[{author:"Bait", content:"я ебал всех в рот", date:"12-12-2002"}],
    agreement:230,
    disagreement:20,
    answer:"You are stupid",
    created_date:"12-12-2020"
  },
  {
    title:'Huita',
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor.",

  }],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { addPost, removePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
