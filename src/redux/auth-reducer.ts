import { authApi, captchaApi } from "../api/api";
import { stopSubmit } from "redux-form";
import { RequestLoginType, DataResponseType } from '../types/types'
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppDispatchType } from "./redux-store";

const LOGIN = 'login';
const SOME_ERROR = 'Some Error';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    data: {} as DataResponseType,
    isAuth: false,
    captchaUrl: ''
};
export type AuthStateType = typeof initialState;

type ActionsType = {
    type: typeof SET_USER_DATA | typeof SET_CAPTCHA_URL | null,
    stateAction: AuthStateType
};

const copyState = (state: AuthStateType = initialState): AuthStateType => {
    return {
        data: state.data,
        isAuth: state.isAuth,
        captchaUrl: state.captchaUrl
    };

};

const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
    let newState = copyState(state);
    switch (action.type) {
        case SET_USER_DATA:
            newState.data.login = action.stateAction.data.login;
            newState.data.email = action.stateAction.data.email;
            newState.data.userId = action.stateAction.data.id;
            newState.isAuth = action.stateAction.isAuth;
            return newState;
        case SET_CAPTCHA_URL:
            newState.captchaUrl = action.stateAction.captchaUrl;
            return newState;
        default:
            return state;
    }
}
export const setAuthUserData = (data: DataResponseType, isAuth: boolean): ActionsType => {
    return { type: SET_USER_DATA, stateAction: { data, isAuth, captchaUrl: '' } };

}
export const setCaptchaUrl = (captchaUrl: string): ActionsType => {
    return { type: SET_CAPTCHA_URL, stateAction: { captchaUrl } } as ActionsType;
}

// --------------------------------- thunks -----------------------------------
type ThunkType = ThunkAction<Promise<void>, AuthStateType, null, Action<string>>

export const authUserThunk = (): ThunkType => async (dispatch: AppDispatchType) => {
    let response = await authApi.me();
    if (response.data.resultCode === 0) {
        const data = response.data.data as DataResponseType;
        dispatch(setAuthUserData(data, true));
    }
}

export const loginUserThunk = (data: RequestLoginType): ThunkType => async (dispatch: AppDispatchType) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === 0) {
        dispatch(authUserThunk());
        dispatch(setCaptchaUrl(''));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : SOME_ERROR
        stopSubmit(LOGIN, { _error: messageError });
    }
};

export const logoutUserThunk = (): ThunkType => {
    return async (dispatch: AppDispatchType) => {
        let response = await authApi.logout();
        let data = response.data.data as DataResponseType;
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(data, false));
        }
    }
}

export const getCaptchaUrlThunk = (): ThunkType => {
    return async (dispatch: AppDispatchType) => {
        let response = await captchaApi.getCaptchaUrl();
        let url = response.data.url;
        dispatch(setCaptchaUrl(url));
    }
}
export default authReducer;