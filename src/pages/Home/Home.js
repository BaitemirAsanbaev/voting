import React from 'react';
import PostsList from '../../components/PostsList/PostsList';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner/>
      <h1 style={{textAlign:"center"}}>Лучшие гражданские иннициативы</h1>
      <PostsList/>
    </div>
  );
}

export default Home;
