import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import { createMessageBodyAction, createSendMessageBodyAction } from '../../../redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <Dialog name={d.name} id={d.id} />
    });
    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} />
    });
    
    let sendMessageBody = () => {
        let action = createSendMessageBodyAction();
        props.dispatch(action);
    };
    let changeMessadeBody = (e) => {
        let text = e.target.value;
        let action = createMessageBodyAction(text);
        props.dispatch(action);
    };
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='Enter your message'
                        value={props.dialogsPage.newMessageBody} onChange={changeMessadeBody} />
                </div>
                <div><button onClick={sendMessageBody}>Send</button></div>
            </div>
        </div>


    );
}


export default Dialogs;