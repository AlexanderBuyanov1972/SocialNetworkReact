import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


let Header = (props) => {
    return (

        <header className={styles.header}>
            <img src='https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png' alt="not found" />
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>


    );
};



export default Header;