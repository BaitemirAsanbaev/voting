import React from "react";
import { useParams } from "react-router-dom";
import FullPost from "../../components/FullPost/FullPost";
const Post = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <FullPost id={params.id}/>
    </div>
  );
};

export default Post;
