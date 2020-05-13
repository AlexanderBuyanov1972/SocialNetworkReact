import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';

const Profile = ({profile, status, updateStatusUser}) => {

  return (
    <div className={styles.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusUser={updateStatusUser}
        text='ava + description'
        src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;