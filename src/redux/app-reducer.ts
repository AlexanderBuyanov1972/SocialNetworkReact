import { authUserThunk } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = { initialized: false };
type InitialStateType = typeof initialState;

type ActionType = {
    type: typeof SET_INITIALIZED
};


const appReducer = (state: InitialStateType = initialState,
    action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
export const setInitialized = (): ActionType => {
    return { type: SET_INITIALIZED };
}
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authUserThunk());
    Promise.all([promise])
        .then(
            () => {
                dispatch(setInitialized());
            });
};
export default appReducer;