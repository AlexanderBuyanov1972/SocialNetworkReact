import React from 'react';
import styleContent from './Post.module.css';

const Post = () => {
  return (

    <div className={styleContent.active}>
      <img src='https://s.yimg.com/ny/api/res/1.2/i4kpzp4ejlsUL1kEfzQGEg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://img.huffingtonpost.com/asset/5cd29f66200000590016e7b8.jpeg' />
      new post
         <div>
        <button>Like</button>
        <button>disLike</button></div>
    </div>


  );
}
export default Post;