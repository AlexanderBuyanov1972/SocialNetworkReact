import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.active}>
      <img src={props.http} />
      {props.message}
      <div>
        <button>Like {props.countLikes}</button>
        <button>disLike</button></div>
    </div>
  );
}
export default Post;