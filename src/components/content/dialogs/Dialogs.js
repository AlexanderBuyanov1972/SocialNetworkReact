import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => {
        return <Dialog name={d.name} id={d.id} />
    });
    let messagesElements = props.dialogsPage.messages.map( m => {
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