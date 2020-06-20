import React from 'react'
import styles from './Post.module.css'

type PropsType = {
  http: string
  message: string
  countLikes: number
}

const Post: React.FC<PropsType> = (props: PropsType) => {
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