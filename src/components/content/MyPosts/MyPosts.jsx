import React from 'react';
import styleContent from './Post/Post.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (

    <div className={styleContent.active}>
      my post
        <div>
        <textarea></textarea>
        <br/>
        <button>Add post</button>
        <button>Remove</button>
        <br/>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default MyPosts;