import { ResultCodesEnum } from "../api/api";
import { stopSubmit } from "redux-form";
import { RequestLoginType, MeResponseData } from '../types/types'
import { InferActionsTypes, BaseThunkType } from "./redux-store";
import { captchaApi } from "../api/security-api";
import { authApi } from "../api/auth-api";

const LOGIN = 'login';
const SOME_ERROR = 'Some Error';

let initialState = {
    data: {} as MeResponseData,
    isAuth: false,
    captchaUrl: ''
};
export type AuthStateType = typeof initialState;

const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'SET_CAPTCHA_URL':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
export const actionsAUTH = {
    setAuthUserData: (data: MeResponseData, isAuth: boolean) =>
        ({ type: 'SET_USER_DATA', payload: { data, isAuth, captchaUrl: '' } } as const),
    setCaptchaUrl: (captchaUrl: string) => ({ type: 'SET_CAPTCHA_URL', payload: { captchaUrl } } as const)
}

type ActionsType = InferActionsTypes<typeof actionsAUTH>

// --------------------------------- thunks -----------------------------------
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

export const authUserThunk = (): ThunkType => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        const data = response.data.data as MeResponseData;
        dispatch(actionsAUTH.setAuthUserData(data, true))
    }
}

export const loginUserThunk = (data: RequestLoginType): ThunkType => async (dispatch) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(authUserThunk());
        dispatch(actionsAUTH.setCaptchaUrl(''))
    } else {
        if (response.data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunk());
        }
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : SOME_ERROR
        dispatch(stopSubmit(LOGIN, { _error: messageError }));
    }
};

export const logoutUserThunk = (): ThunkType => {
    return async (dispatch) => {
        let response = await authApi.logout();
        let data = response.data.data as MeResponseData;
        if (response.data.resultCode === 0) {
            dispatch(actionsAUTH.setAuthUserData(data, false));
        }
    }
}

export const getCaptchaUrlThunk = (): ThunkType => {
    return async (dispatch) => {
        let response = await captchaApi.getCaptchaUrl();
        let url = response.data.url;
        dispatch(actionsAUTH.setCaptchaUrl(url));
    }
}
export default authReducer;