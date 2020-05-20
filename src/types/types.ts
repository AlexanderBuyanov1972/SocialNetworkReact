export type DataForLoginType = {
    email: string | null,
    password: string | null,
    rememberMe: boolean | null,
    captcha?: string | null,
};

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
export type PhotoType = {
    photos: {
        small: string | null,
        large: string | null
    },
};

export type UserType = {
    name: string | null,
    id: number | null,
    photos: PhotoType
    status: string | null,
    followed: boolean

};