import { instance, PathApiEnum } from "./api";
import { ResponseType, CaptchaResponseData } from "../types/types";

export const captchaApi = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseData>(`${PathApiEnum.CAPTCHA}`);
    }
};