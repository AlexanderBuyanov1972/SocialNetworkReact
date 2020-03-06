import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={styles.item}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <Dialog name='Dima' id='1' />
                <Dialog name='Sveta' id='2' />
                <Dialog name='Andrey' id='3' />
                <Dialog name='Sasha' id='4' />
            </div>
            <div className={styles.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Yo!' />
            </div>
        </div>


    );
}


export default Dialogs;