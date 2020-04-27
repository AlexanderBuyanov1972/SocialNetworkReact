import { getAuthUser } from "../api/api";

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
                data: action.data,
                isAuth: true
            };

        default:
            return state;
    }

}
export const setAuthUserData = (data) => {
    return { type: SET_USER_DATA, data };
}

export const authUserThunk = () =>{
    return (dispatch) => {
        getAuthUser().then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data));
                }
            }
        );
    };
};

export default authReducer;