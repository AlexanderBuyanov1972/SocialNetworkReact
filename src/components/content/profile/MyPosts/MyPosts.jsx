import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post countLikes={p.countLikes} message={p.message} http={p.http}/>);
  return (

    <div className={styles.active}>
      <h3 className={styles.my_post}>My Post</h3>
      <div className={styles.textarea}>
        <textarea></textarea>
      </div>
      <div className={styles.buttons}>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
}
export default MyPosts;