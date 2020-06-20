import React from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import styles from './Profile.module.css'
import { ProfileType} from '../../../types/types'

type PropsType = {
  profile: ProfileType
  status: string
  isOwner: boolean
  updateStatusUser: (status: string) => Promise<void>
  savePhotoProfile: (file: File) => Promise<void>
  saveProfile: (profile: ProfileType) => Promise<void>
}

const Profile: React.FC<PropsType> = ({ profile, status, updateStatusUser, isOwner, savePhotoProfile, saveProfile }) => {

  return (
    <div className={styles.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        isOwner={isOwner}
        updateStatusUser={updateStatusUser}
        savePhotoProfile={savePhotoProfile}
        saveProfile={saveProfile} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;