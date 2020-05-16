import React, { useState } from 'react';
import Preloader from '../../../../preloader/Preloader';
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks';
import man from '../../../../../assets/images/man.jpg';
import styles from './ProfileInfo.module.css';
import ProfileInfoDataFormRedux from './profileInfoDataForm/ProfileInfoDataForm';
import ProfileInfoData from './profileInfoData/ProfileInfoData';
const ProfileInfo = ({ profile, isOwner, status, updateStatusUser, savePhotoProfile }) => {
    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onPhotoSelect = (e) => {
        if (e.target.files.length) {
            savePhotoProfile(e.target.files[0]);
        }
    };
    if (!profile.photos) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.main}>
                <img src={profile.photos.large || man} />
                <div>
                    {isOwner && <input type={"file"} onChange={onPhotoSelect} />}
                </div>
            </div>
            {editMode ? <ProfileInfoDataFormRedux profile={profile}
                isOwner={isOwner} deactivateEditMode={deactivateEditMode} />
                : <ProfileInfoData profile={profile} isOwner={isOwner}
                    activateEditMode={activateEditMode} />}
            <ProfileStatusWithHooks status={status} updateStatusUser={updateStatusUser} />
        </div>
    );
}

export default ProfileInfo;