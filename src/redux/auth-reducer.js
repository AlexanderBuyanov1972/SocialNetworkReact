import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    data: {
        userId: null,
        login: null,
        email: null
    },
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload.data,
                isAuth: action.payload.isAuth
            };
        default:
            return state;
    }
}
export const setAuthUserData = (data, isAuth) => {
    return { type: SET_USER_DATA, payload: { data, isAuth } };
}

export const authUserThunk = () => (dispatch) => {
    return authApi.me().then(
        d => {
            if (d.resultCode === 0) {
                dispatch(setAuthUserData(d.data, true));
            }
        }
    );
};


// const data = {email, password, rememderMe = false};

export const loginUserThunk = (data) => {
    return (dispatch) => {
        authApi.login(data).then(
            d => {
                if (d.resultCode === 0) {
                    dispatch(authUserThunk());
                } else {
                    let message = d.messages.length > 0 ? d.messages[0] : "Some Error"
                    let action = stopSubmit("login", { _error: message });
                    dispatch(action);
                }
            }
        );
    };
}

export const logoutUserThunk = () => {
    return (dispatch) => {
        authApi.logout().then(
            d => {
                if (d.resultCode === 0) {
                    dispatch(setAuthUserData(d.data, false));
                }
            }
        );
    };
}

export default authReducer;