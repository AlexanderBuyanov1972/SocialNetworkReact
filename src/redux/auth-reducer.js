import { authApi, captchaApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload.data,
                isAuth: action.payload.isAuth
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            };
        default:
            return state;
    }
}
export const setAuthUserData = (data, isAuth) => {
    return { type: SET_USER_DATA, payload: { data, isAuth } };
}
export const setCaptchaUrl = (captchaUrl) => {
    return { type: SET_CAPTCHA_URL, payload: { captchaUrl } };
}

export const authUserThunk = () => async (dispatch) => {
    let response = await authApi.me();
    if (response.resultCode === 0) { dispatch(setAuthUserData(response.data, true)); }
}

// const data = {email, password, rememderMe = false, captcha};

export const loginUserThunk = (data) => async (dispatch) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === 0) {
        dispatch(authUserThunk());
        dispatch(setCaptchaUrl(null));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        stopSubmit("login", { _error: messageError });
    }
};

export const logoutUserThunk = () => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data, false));

    }
}

export const getCaptchaUrlThunk = () => async (dispatch) => {
    let response = await captchaApi.getCaptchaUrl();
    dispatch(setCaptchaUrl(response.data.url));

}


export default authReducer;