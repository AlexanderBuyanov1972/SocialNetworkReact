import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <Dialog name={d.name} key={d.id} id={d.id} />
    });
    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} key={m.id} />
    });

    let addNewMessade = (formData) => {
        props.sendMessage(formData.newMessageBody);
    };
    if (!props.isAuth) {
        return <Redirect to="/login" />
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessade} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' placeholder='Enter your message' name='newMessageBody' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);


export default Dialogs;

// const addMessageForm = (props) => {
//     return (
//         <form onSubmit = {props.handleSubmit}>
//             <div>
//                 <Field component='textarea' placeholder='Enter your message' name='newMessageBody'
//                     value={props.dialogsPage.newMessageBody} onChange={changeMessadeBody} />
//             </div>
//             <div>
//                 <button onClick={sendMessageBody}>Send</button>
//             </div>
//         </form>
//     );
// }
