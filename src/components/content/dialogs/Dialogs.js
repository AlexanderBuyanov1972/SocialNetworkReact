import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../formsControls/FormsControls';

const max = 15;
const min = 2;

const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

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
                <Field component={Textarea} placeholder='Enter your message' name='newMessageBody'
                    validate={[required, maxLength, minLength]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
export default Dialogs;