import React from 'react';
import styles from './NavBar.module.css';

let NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href='/content'>Content</a>
            </div>
            <div className={styles.item}>
                <a href='/dialogs'>Dialogs</a>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/musics'>Musics</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );

}
export default NavBar;