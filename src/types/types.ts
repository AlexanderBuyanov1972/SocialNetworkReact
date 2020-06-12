import { ResultCodesEnum } from './../api/api';

export type GetItemsType<T> = {
    items: Array<T>
    totalCount: number
    error: string | null
}
// ----------- response --------
export type ResponseType<D = {}> = {
    data: D
    resultCode: ResultCodesEnum
    messages: Array<string>
};

export type MeResponseData = {
    userId: number
    email: string
    login: string
}

export type LoginResponseData = {
    userId: number
}
export type CaptchaResponseData = {
    url: string
};
export type StatusType = {
    status: string
};
// ------------- request -------------
export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
};

// -------------- profile -----------------
export type ProfileType = {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType

};
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
};
// --------------- user -------------------
export type UserType = {
    name: string | null,
    id: number | null,
    photos: PhotoType
    status: string | null,
    followed: boolean

};
export type PhotoType = {
    small: string | null
    large: string | null
};

