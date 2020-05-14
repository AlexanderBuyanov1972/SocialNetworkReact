import * as axios from 'axios';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = "173f41e8-aa06-428c-aef6-e95c8d5f1b62";
const Profile_Status = 'profile/status/';
const AUTH_ME = 'auth/me';
const AUTH_LOGIN = 'auth/login';
const FOLLOW = 'follow/';
const PROFILE = 'profile/';
const COUNT = 'count';
const USERS = 'users';
const PAGE = 'page';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: BASE_URL,
        headers: {
            "API-KEY": API_KEY
        }
    }
);
// ----------------------object statusUser--------------------------------------------
export const statusUser = {
    getStatusUser(userId) {
        return instance.get(`${Profile_Status}${userId}`).then(
            response => {
                return response.data
            });
    },
    updateStatusUser(status) {
        return instance.put(`${Profile_Status}`, { status }).then(
            response => {
                return response.data
            });
    }
};
// ----------------------object authApi--------------------------------------------
export const authApi = {
    me() {
        return instance.get(AUTH_ME).then(
            response => {
                return response.data;
            }
        );
    },
    login(data) {
        return instance.post(AUTH_LOGIN, data).then(
            response => {
                return response.data;
            }
        );
    },
    logout() {
        return instance.delete(AUTH_LOGIN).then(
            response => {
                return response.data;
            }
        );
    }
};
// -------------------object frendsAPI----------------------------------------------
export const frendsAPI = {
    unsubscribeUser(id) {
        return instance.delete(`${FOLLOW}${id}`).then(response => {
            return response.data.resultCode
        });
    },

    subscribeUser(id) {
        return instance.post(`${FOLLOW}${id}`).then(response => {
            return response.data.resultCode
        });
    }
};
// -------------------------separate functions-----------------------------------------
export const getUserById = (userId) => {
    return instance.get(`${PROFILE}${userId}`).then(
        response => {
            return response.data
        });
}

export const getUsers = (numberPage = 1, pageSize = 10) => {
    return instance.get(`${USERS}?${PAGE}=${numberPage}&${COUNT}=${pageSize}`).then(
        response => {
            return response.data
        });
};