import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import axios from 'axios';
import { api } from '../../api';

const PostsList = () => {
  const [posts, setPosts] = useState([{
    id:1, 
    title:'Huita',
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ligula ac ex scelerisque pharetra. Fusce vestibulum, neque eu pulvinar    cursus, metus mi laoreet turpis, sit amet vehicula risus velit id elit.    Sed at justo eget augue finibus rhoncus. Quisque et pharetra dolor.",
    comments:[{author:"Bait", content:"я ебал всех в рот", date:"12-12-2002"}],
    agreement:230,
    disagreement:20,
    answer:"You are stupid",
    created_date:"12-12-2020"
  }])
  useEffect(()=>{
    axios.get(api+"posts/").then((res)=>{
      console.log(res.data);
      setPosts(res.data)
    }).catch((e)=>console.error(e.message))

  },[])
  return (
    <div>
      {posts.map((item, id)=>{
        return<Post key={id} data={item}/>
      })}
    </div>
  );
}

export default PostsList;
