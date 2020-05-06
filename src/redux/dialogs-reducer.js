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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = { id: '4', message: action.newMessageBody };
            if (body.message !== '') {
                return {
                    ...state,
                    messages: [...state.messages, body]
                };
            }
        default:
            return state;
    }
};
export const createSendMessageBodyAction = (newMessageBody) => {
    return { type: SEND_MESSAGE, newMessageBody };
}

export default dialogsReducer;