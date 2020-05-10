import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../../../preloader/Preloader';
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile.photos) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.main}>
                <img src={props.profile.photos.large} />
            </div>
            {/* <div>
                <img src={props.src} />
            </div> */}
            {/* <div className={styles.text}>
                {props.text}
            </div> */}
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatusUser={props.updateStatusUser}/>
            </div>

        </div>
    );
}

export default ProfileInfo;