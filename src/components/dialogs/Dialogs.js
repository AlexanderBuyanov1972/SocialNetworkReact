import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/1' className={styles.item}>Dima</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2' className={styles.item}>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3' className={styles.item}>Andrey</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4' className={styles.item}>Sasha</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hi
                </div>
                <div className={styles.message}>
                    How are you?
                </div>
                <div className={styles.message}>
                    Yo!
                </div>
            </div>
        </div>


    );
}


export default Dialogs;