import { statusUser } from './../api/api';

// ----------- response --------
export type ResponseType = {
    data: DataResponseType
    resultCode: number
    messages: Array<string>
};

export type DataResponseType = {
    userId?: number
    email?: string
    login?: string
    photos?: PhotoType
    id?: number
}
// ----------- captcha ---------------
export type ResponseGetCaptchaType = {
    url: string
};
// ------------- request -------------
export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
};
// -------------- status ------------------

export type StatusType = {
    status: string
};
// -------------- profile -----------------
export type ProfileType = {
    userId: number | null
    lookingForAJob: string | null
    lookingForAJobDescription: string | null
    fullName: string | null
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
// ------------users----------------------------
export type ResponseUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}