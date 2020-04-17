import React from 'react';
import { createMessageBodyAction, createSendMessageBodyAction } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let sendMessageBody = () => {
//                         store.dispatch(createSendMessageBodyAction());
//                     };
//                     let changeMessadeBody = (text) => {
//                         store.dispatch(createMessageBodyAction(text));
//                     };
//                     return (
//                         <Dialogs dialogsPage={state.dialogsPage}
//                             sendMessage={sendMessageBody}
//                             changeMessage={changeMessadeBody} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(createSendMessageBodyAction())},
        changeMessage: (text) => {dispatch(createMessageBodyAction(text))}
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;