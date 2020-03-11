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
    
    let dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Sasha'}
    ];
    let dialogsElements = dialogsData.map( d => {
        return <Dialog name={d.name} id={d.id} />
    });

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo!'}
    ];

    let messagesElements = messagesData.map( m => {
        return <Message message={m.message} />
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>


    );
}


export default Dialogs;