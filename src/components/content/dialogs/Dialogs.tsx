import React, {ComponentType} from 'react'
import styles from './Dialogs.module.css'
import Dialog from './DialogItem/DialogItem'
import Message from './MessageItem/MessageItem'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators'
import { actionsDialog } from '../../../redux/dialogs-reducer'
import { createField, Textarea} from '../../../utils/formsControls/FormsControls'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { AppStateType } from '../../../redux/redux-store'

const max = 15;
const min = 2;
const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

type FormType = { newMessageBody: string}
type CreateFieldKeysType = Extract<keyof FormType, string>
type PropsDialogsType = ReturnType<typeof mapStateToProps & typeof mapDispatchToProps>

const AddMessageForm: React.FC<InjectedFormProps<FormType, {}, string>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<CreateFieldKeysType>(Textarea, "newMessageBody", "Enter your message", [required, minLength, maxLength], {}, '')}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm<FormType, {}, string>({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs: React.FC<PropsDialogsType> = (props: PropsDialogsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
    const addNewMessade = (value: FormType) => {
        actionsDialog.createSendMessageBodyAction(value.newMessageBody);
    };
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

let mapStateToProps = (state: AppStateType) => ({ dialogsPage: state.dialogsPage })

let mapDispatchToProps = { ...actionsDialog }
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs);