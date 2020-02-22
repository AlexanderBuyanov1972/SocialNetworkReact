import React from 'react';
import styleContent from './Post.module.css';

const Post = (props) => {
  return (

    <div className={styleContent.active}>
      <img src = {props.http} />
      {props.message}
         <div>
        <button>Like</button>
        <button>disLike</button></div>
    </div>


  );
}
export default Post;