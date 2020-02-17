import React from 'react';
import styleNavBar from './NavBar.module.css';

let NavBar = () => {
    return (
        <nav className={styleNavBar.nav}>
            <div className={styleNavBar.item}>
                <a>Profile</a>
                </div>
            <div className={styleNavBar.item}>
                <a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    );

}
export default NavBar;