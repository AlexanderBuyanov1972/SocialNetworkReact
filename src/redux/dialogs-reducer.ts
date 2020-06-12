import { InferActionsTypes } from './redux-store';
let message = { id: '', message: '' };
type MessageType = typeof message;

let dialog = { id: '', name: '' };
type DialogType = typeof dialog;

type DialogsStateType = typeof initialState
const message_1: MessageType = { id: '1', message: 'Hi' }
const message_2: MessageType = { id: '2', message: 'How are you?' }
const message_3: MessageType = { id: '3', message: 'HYo!' }

const dialog_1: DialogType = { id: '1', name: 'Dima' }
const dialog_2: DialogType = { id: '2', name: 'Sveta' }
const dialog_3: DialogType = { id: '3', name: 'Andrey' }
const dialog_4: DialogType = { id: '4', name: 'Sasha' }
let initialState = {
    messages: [message_1, message_2, message_3],
    dialogs: [dialog_1, dialog_2, dialog_3, dialog_4]
};

const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
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
export const actionsDialog = {
    createSendMessageBodyAction: (newMessageBody: string) => ({ type: 'SEND_MESSAGE', newMessageBody } as const)
}

type ActionsType = InferActionsTypes<typeof actionsDialog>

export default dialogsReducer;