const SEND_MESSAGE = 'SEND_MESSAGE';
const SEND_MESSAGE2 = 'SEND_MESSAGE2';

let message = { id: 0, message: '' };
type MessageType = typeof message;

let dialog = { id: 0,name: '' };
type DialogType = typeof dialog;

type StateType = typeof initialState
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

type ActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string | null
};

const dialogsReducer = (state: StateType = initialState, action: ActionType) => {
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
export const createSendMessageBodyAction = (newMessageBody: string | null) => {
    return { type: typeof SEND_MESSAGE, newMessageBody };
}

export default dialogsReducer;