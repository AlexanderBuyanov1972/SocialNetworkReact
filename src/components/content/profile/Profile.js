import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';

const Profile = ({ profile, status, updateStatusUser, isOwner, savePhotoProfile}) => {

  return (
    <div className={styles.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusUser={updateStatusUser}
        isOwner = {isOwner} 
        savePhotoProfile={savePhotoProfile}/>
      <MyPostsContainer />
    </div>
  );
}
export default Profile;