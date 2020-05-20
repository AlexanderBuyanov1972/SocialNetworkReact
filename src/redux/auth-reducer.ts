import { authApi, captchaApi } from "../api/api";
import { stopSubmit } from "redux-form";
import { DataForLoginType } from '../types/types'

const LOGIN = 'login';
const SOME_ERROR = 'Some Error';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialData = { id: null, login: null, email: null };
type DataForStateType = typeof initialData;

let initialState = { data: initialData, isAuth: false, captchaUrl: null };
type StateType = typeof initialState;

type ActionType = {
    type: typeof SET_USER_DATA | typeof SET_CAPTCHA_URL | null,
    stateAction: StateType
};

const copyState = (state: StateType = initialState): StateType => {
    return {
        data: state.data,
        isAuth: state.isAuth,
        captchaUrl: state.captchaUrl
    } as StateType;

};

const authReducer = (state: StateType = initialState, action: ActionType) => {
    let newState = copyState(state) as StateType;
    switch (action.type) {
        case SET_USER_DATA:
            newState.data = action.stateAction.data;
            newState.isAuth = action.stateAction.isAuth;
            return newState;
        case SET_CAPTCHA_URL:
            newState.captchaUrl = action.stateAction.captchaUrl;
            return newState;
        default:
            return state;
    }
}
export const setAuthUserData = (data: DataForStateType, isAuth: boolean): ActionType => {
    return { type: SET_USER_DATA, stateAction: { data, isAuth } } as ActionType;

}
export const setCaptchaUrl = (captchaUrl: string | null): ActionType => {
    return { type: SET_CAPTCHA_URL, stateAction: { captchaUrl } } as ActionType;
}

export const authUserThunk = () => async (dispatch: any) => {
    let response = await authApi.me();
    if (response.resultCode === 0) {
        const data = response.data as DataForStateType;
        dispatch(setAuthUserData(data, true));
    }
}

export const loginUserThunk = (data: DataForLoginType) => async (dispatch: any) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === 0) {
        dispatch(authUserThunk());
        dispatch(setCaptchaUrl(null));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : SOME_ERROR
        stopSubmit(LOGIN, { _error: messageError });
    }
};

export const logoutUserThunk = () => async (dispatch: any) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data, false));

    }
}

export const getCaptchaUrlThunk = () => async (dispatch: any) => {
    let response = await captchaApi.getCaptchaUrl();
    dispatch(setCaptchaUrl(response.data.url));

}


export default authReducer;