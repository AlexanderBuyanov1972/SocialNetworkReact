import React from 'react';
import styles from './Preloader.module.css';
import preloader from "../../assets/images/preloader.svg";

const Preloader: React.FC = () => {
    return (
        <div  className={styles.loader}>
            <img src={preloader}/>
        </div>
    );
    
}

export default Preloader;