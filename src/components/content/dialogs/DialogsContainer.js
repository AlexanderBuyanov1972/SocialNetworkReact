import React from 'react';
import { createMessageBodyAction, createSendMessageBodyAction } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let sendMessageBody = () => {
                        let action = createSendMessageBodyAction();
                        store.dispatch(action);
                    };
                    let changeMessadeBody = (text) => {
                        let action = createMessageBodyAction(text);
                        store.dispatch(action);
                    };
                    return (
                        <Dialogs dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            newMessageBody={state.dialogsPage.newMessageBody}
                            sendMessage={sendMessageBody}
                            changeMessage={changeMessadeBody} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}


export default DialogsContainer;