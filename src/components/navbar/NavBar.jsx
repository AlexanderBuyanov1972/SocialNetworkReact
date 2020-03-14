import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

let NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to='/dialogs'>Dialogs</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.active} to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.active} to='/musics'>Musics</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.active} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );

}
export default NavBar;