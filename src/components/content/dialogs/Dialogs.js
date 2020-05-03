import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <Dialog name={d.name} key={d.id} id={d.id} />
    });
    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} key={m.id} />
    });

    let sendMessageBody = () => {
        props.sendMessage();
    };
    let changeMessadeBody = (e) => {
        let text = e.target.value;
        props.changeMessage(text);
    };
    if (!props.isAuth) {
        return <Redirect to="/login"/>
    }
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