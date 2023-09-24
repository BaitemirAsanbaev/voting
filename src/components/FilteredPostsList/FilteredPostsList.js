import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';

const FilteredPostsList = () => {
  const posts = useSelector(state=>state.posts.posts)
  const filtered = posts.filter(item=>item.agreement>1000)
  console.log(posts);
  console.log(filtered);
  return (
    <div>
      {filtered.map((item, id)=>{
        return <Post key={id} data={item}/>
      })}
    </div>
  );
}

export default FilteredPostsList;
