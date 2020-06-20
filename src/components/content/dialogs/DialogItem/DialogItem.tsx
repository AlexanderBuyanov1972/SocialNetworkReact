import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    id: string
    name: string
}

const Dialog: React.FC<PropsType> = (props: PropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={styles.item}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;