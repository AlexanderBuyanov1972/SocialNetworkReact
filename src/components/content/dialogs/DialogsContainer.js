import React from 'react';
import { createMessageBodyAction, createSendMessageBodyAction } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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