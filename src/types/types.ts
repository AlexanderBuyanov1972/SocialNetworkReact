import { ResultCodesEnum } from './../api/api';

export type GetItemsType<T> = {
    items: Array<T>
    totalCount: number
    error: string | null
}
// ----------- response --------
export type ResponseType<D = {}> = {
    data: Data
    resultCode: ResultCodesEnum
    messages: Array<string>
};

export type Data = {photos? : PhotoType | undefined}

export type MeResponseData = {
    userId: number
    email: string
    login: string
}

export type LoginResponseData = { userId: number }
export type CaptchaResponseData = { url: string };
export type StatusType = { status: string };
// ------------- request -------------
export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
};

// -------------- profile -----------------
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
    status: string
};
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};
export type PhotoType = {
    small: string
    large: string
};
// --------------- user -------------------
// export type UserType = {
//     id: number
//     name: string
//     followed: boolean
// };


