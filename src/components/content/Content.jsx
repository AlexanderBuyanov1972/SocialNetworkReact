import React from 'react';
import styles from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
  return (
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      </div>
      <div className={styles.active}>
        ava + description
        </div>
      <MyPosts />
    </div>
  );
}
export default Content;