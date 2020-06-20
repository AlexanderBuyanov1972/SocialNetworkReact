import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export type PropsHeaderType = {
    isAuth: boolean
    login: string
    logout: () => void
}

let Header: React.FC<PropsHeaderType> = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png' alt="not found" />
            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;