const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Yo!' }
    ],

    dialogs: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Sveta' },
        { id: '3', name: 'Andrey' },
        { id: '4', name: 'Sasha' }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_MESSAGE_BODY) {
        state.newMessageBody = action.newText;
    } else if (action.type === SEND_MESSAGE) {
        let body = { id: '4', message: state.newMessageBody };
        if (body.message !== '') {
            state.messages.push(body);
            state.newMessageBody = '';
        }
    }
    return state;
};
export const createSendMessageBodyAction = () => {
    return { type: SEND_MESSAGE };
}

export const createMessageBodyAction = (text) => {
    return {
        type: UPDATE_MESSAGE_BODY,
        newText: text
    };
}
export default dialogsReducer;