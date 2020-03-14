import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return(
        <div>
            <div>
        <img src={props.src} />
      </div>
      <div className={styles.text}>
        {props.text}
        </div>
        </div>
    );
}

export default ProfileInfo;