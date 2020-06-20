import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink activeClassName={styles.active} to='/login'>Login</NavLink>
            </div>
            <br />
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
            <br />
            <div>
                <NavLink activeClassName={styles.active} to='/users'>Users</NavLink>
            </div>
        </nav>
    );

}
export default NavBar;