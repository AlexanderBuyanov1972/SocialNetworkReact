import * as axios from 'axios';
import { setProfile } from '../redux/profiles-reducer';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "173f41e8-aa06-428c-aef6-e95c8d5f1b62"
        }
    }
);
export const getUserById = (userId) => {
    return instance.get(`profile/${userId}`).then(
        response => {
            return response.data
        });
}
export const getAuthUser = () => {
    return instance.get('auth/me').then(
        response => {
            return response.data
        }
    );
};
export const getUsers = (numberPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${numberPage}&count=${pageSize}`).then(
        response => {
            return response.data
        });
};

export const frendsAPI = {
    unsubscribeUser(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        });
    },

    subscribeUser(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        });
    }
};

