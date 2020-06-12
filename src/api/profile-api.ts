import { ProfileType, PhotoType,ResponseType} from "../types/types";
import { instance, PathApiEnum, ConstBaseApiEnum } from "./api";

export const userProfile = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`${PathApiEnum.PROFILE}/${userId}`);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`${PathApiEnum.PROFILE}`, profile);
    },
    getStatusProfile(userId: number) {
        return instance.get<string>(`${PathApiEnum.PROFILE_STATUS}${userId}`);
    },
    updateStatusProfile(status: string) {
        return instance.put<ResponseType>(`${PathApiEnum.PROFILE_STATUS}`, status);
    },
    savePhotoProfile(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<ResponseType<PhotoType>>(`${PathApiEnum.PROFILE}/${PathApiEnum.PHOTO}`, formData, {
            headers: {
                'content-type': ConstBaseApiEnum.MULTYPART_FORM_DATA
            }
        });
    }
};