import axios from 'axios';

export enum ConstBaseApiEnum {
    BASE_URL = 'https://social-network.samuraijs.com/api/1.0/',
    API_KEY = "173f41e8-aa06-428c-aef6-e95c8d5f1b62",
    MULTYPART_FORM_DATA = 'multipart/form-data'
}

export enum PathApiEnum {
    PROFILE_STATUS = 'profile/status/',
    AUTH_ME = 'auth/me',
    AUTH_LOGIN = 'auth/login',
    FOLLOW = 'follow/',
    PROFILE = 'profile',
    COUNT = 'count',
    USERS = 'users',
    PAGE = 'page',
    PHOTO = 'photo',
    CAPTCHA = 'security/get-captcha-url'
}

export let instance = axios.create(
    {
        withCredentials: true,
        baseURL: ConstBaseApiEnum.BASE_URL,
        headers: {
            "API-KEY": ConstBaseApiEnum.API_KEY
        }
    }
);

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}