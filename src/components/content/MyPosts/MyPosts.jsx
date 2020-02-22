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
      <Post message='post1' http='https://s.yimg.com/ny/api/res/1.2/i4kpzp4ejlsUL1kEfzQGEg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://img.huffingtonpost.com/asset/5cd29f66200000590016e7b8.jpeg'/>
      <Post message='post2' http='https://lh3.googleusercontent.com/proxy/X-DqvBVg4H67W2YDfOTQ5uYaEs6eT749ANdzco6w1vaB6GtHyoSgHIT_kLNj7626g3XgbpdFZUOD77lrMjG5f5eSRd_VIaG0YBSj2t12_NUzcBxfkw'/>
      <Post message='post3' http='https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png'/>
      <Post message='post4' http='https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'/>
      <Post message='post5' http='https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'/>
    </div>
  );
}
export default MyPosts;