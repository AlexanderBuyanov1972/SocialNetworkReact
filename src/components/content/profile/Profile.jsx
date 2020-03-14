import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo text='ava + description' src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      <MyPosts />
    </div>
  );
}
export default Profile;