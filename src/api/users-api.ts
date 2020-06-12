import { instance, PathApiEnum } from "./api"
import { UserType, ResponseType, GetItemsType } from "../types/types"

export const frendsAPI = {
    getUsers(numberPage: number = 1, pageSize: number = 10) {
        return instance.get<GetItemsType<UserType>>(`${PathApiEnum.USERS}?${PathApiEnum.PAGE}=${numberPage}&${PathApiEnum.COUNT}=${pageSize}`)
    },
    subscribeUser(id: number) {
        return instance.post<ResponseType>(`${PathApiEnum.FOLLOW}${id}`)
    },
    unsubscribeUser(id: number) {
        return instance.delete<ResponseType>(`${PathApiEnum.FOLLOW}${id}`)
    },
    getUserIsFollow(id: number) {
        return instance.get<boolean>(`${PathApiEnum.FOLLOW}${id}`)
    }
};