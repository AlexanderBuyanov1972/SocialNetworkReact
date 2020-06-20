import { authUserThunk } from './auth-reducer'
import { AppDispatchType, InferActionsTypes } from './redux-store'

let initialState = { initialized: false }
type InitialStateType =  { initialized: boolean }

const appReducer = (state: InitialStateType = initialState,
    action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
export const actions = {
    setInitialized:  () => ({ type: 'SET_INITIALIZED' } as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const initializeApp = () => (dispatch: (arg0: { readonly type: "SET_INITIALIZED" }) => void) => {
    let promise = authUserThunk();
    Promise.all([promise])
        .then(
            () => {
                dispatch(actions.setInitialized());
            });
};
export default appReducer;