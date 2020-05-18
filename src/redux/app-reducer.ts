import { authUserThunk } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean,
    globalError: any
};

let initialState: InitialStateType = {
    initialized: false,
    globalError: ''
};

const appReducer = (state = initialState, action: any) => {
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
export const setInitialized = () => {
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