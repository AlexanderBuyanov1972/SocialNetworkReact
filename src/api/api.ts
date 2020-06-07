import { ProfileType, RequestLoginType, ResponseType, ResponseGetCaptchaType, StatusType, UserType, ResponseUsersType } from './../types/types';
import axios from 'axios';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = "173f41e8-aa06-428c-aef6-e95c8d5f1b62";

const Profile_Status = 'profile/status/';
const AUTH_ME = 'auth/me';
const AUTH_LOGIN = 'auth/login';
const FOLLOW = 'follow/';
const PROFILE = 'profile';
const COUNT = 'count';
const USERS = 'users';
const PAGE = 'page';
const PHOTO = 'photo';
const CAPTCHA = 'security/get-captcha-url';

let instance = axios.create(
    {
        withCredentials: true,
        baseURL: BASE_URL,
        headers: {
            "API-KEY": API_KEY
        }
    }
);
// ---------------------- status User get and update--------------------------------------------
export const statusUser = {
    getStatusUser(userId: number) {
        return instance.get<StatusType>(`${Profile_Status}${userId}`);
    },
    updateStatusUser(status: string) {
        return instance.put<ResponseType>(`${Profile_Status}`);
    }
};
// ----------------------object authApi me, login and logout -----------------------
export const authApi = {
    me() {
        return instance.get<ResponseType>(AUTH_ME);
    },
    login(data: RequestLoginType) {
        return instance.post<ResponseType>(AUTH_LOGIN, data);
    },
    logout() {
        return instance.delete<ResponseType>(AUTH_LOGIN)
    }
};
// -------------------object frendsAPI follow and unfollow --------------------------
export const frendsAPI = {
    unsubscribeUser(id: number) {
        return instance.delete<ResponseType>(`${FOLLOW}${id}`);
    },

    subscribeUser(id: number) {
        return instance.post<ResponseType>(`${FOLLOW}${id}`);
    }
};
// -------------------------photo profile -------------------------------
export const photoProfile = {
    savePhotoProfile(file: File) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put<ResponseType>(`${PROFILE}/${PHOTO}`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }
};
// -------------------------user profile --------------------------------
export const userProfile = {
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`${PROFILE}`, profile);
    }
};
// -------------------------captcha url ---------------------------------
export const captchaApi = {
    getCaptchaUrl() {
        return instance.get<ResponseGetCaptchaType>(`${CAPTCHA}`);
    }
};
// -------------------------get user by id ------------------------------
export const getUserById = (userId: number) => {
    return instance.get<ProfileType>(`${PROFILE}/${userId}`);
}
// -------------------------get users -----------------------------------
export const getUsers = (numberPage: number = 1, pageSize: number = 10) => {
    return instance.get<ResponseUsersType>(`${USERS}?${PAGE}=${numberPage}&${COUNT}=${pageSize}`);

};