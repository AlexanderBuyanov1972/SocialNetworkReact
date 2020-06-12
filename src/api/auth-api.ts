import { instance, PathApiEnum } from "./api";
import { MeResponseData, ResponseType, RequestLoginType, LoginResponseData } from "../types/types";

export const authApi = {
    me() {
        return instance.get<ResponseType<MeResponseData>>(PathApiEnum.AUTH_ME);
    },
    login(data: RequestLoginType) {
        return instance.post<ResponseType<LoginResponseData>>(PathApiEnum.AUTH_LOGIN, data);
    },
    logout() {
        return instance.delete<ResponseType>(PathApiEnum.AUTH_LOGIN)
    }
};