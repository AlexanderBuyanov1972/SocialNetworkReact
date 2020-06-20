import React, { useState, ChangeEvent } from 'react'
import Preloader from '../../../../preloader/Preloader'
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks'
import man from '../../../../../assets/images/man.jpg'
import styles from './ProfileInfo.module.css'
import ProfileInfoDataFormRedux from './profileInfoDataForm/ProfileInfoDataForm'
import ProfileInfoData from './profileInfoData/ProfileInfoData'
import { ProfileType} from '../../../../../types/types'

type PropsType = {
    isOwner: boolean
    status: string
    profile: ProfileType
    updateStatusUser: (status: string) => Promise<void>
    savePhotoProfile: (etf: File) => void
    saveProfile: (fd: ProfileType) => Promise<void>
}

const ProfileInfo: React.FC<PropsType> = ({ isOwner, status, profile, updateStatusUser, savePhotoProfile, saveProfile }) => {
    const onSubmit = (formData: ProfileType) => {
        console.log(formData)
        saveProfile(formData).then(
            () => setEditMode(false)
        );

    };
    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const onPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhotoProfile(e.target.files[0]);
        }
    };
    if (!profile.photos) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.main}>
                <img src={profile.photos.large} />
                <div>
                    {isOwner && <input type={"file"} onChange={onPhotoSelect} />}
                </div>
            </div>
            {editMode ? <ProfileInfoDataFormRedux initialValues={profile} onSubmit={onSubmit} profile={profile} />
                : <ProfileInfoData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode} />}
            <div>
                <b>Status</b>: <ProfileStatusWithHooks status={status} updateStatusUser={updateStatusUser} />
            </div>
        </div>
    );
}

export default ProfileInfo;