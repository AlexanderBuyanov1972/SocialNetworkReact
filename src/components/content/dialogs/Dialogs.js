import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => {
        return <Dialog name={d.name} id={d.id} />
    });
    let messagesElements = props.messages.map(m => {
        return <Message message={m.message} />
    });

    let sendMessageBody = () => {
        props.sendMessage();
    };
    let changeMessadeBody = (e) => {
        let text = e.target.value;
        props.changeMessage(text);
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
                        value={props.newMessageBody} onChange={changeMessadeBody} />
                </div>
                <div><button onClick={sendMessageBody}>Send</button></div>
            </div>
        </div>


    );
}


export default Dialogs;