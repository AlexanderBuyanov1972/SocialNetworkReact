import { UserType } from '../types/types';
import { createSelector } from "reselect";
import { AppStateType } from "../redux/redux-store";

export const usersBlock = {
    getAllUsers(state: AppStateType) {
        // @ts-ignore
        return state.usersPage.users;
    },
    getPageSize(state: AppStateType) {
        // @ts-ignore
        return state.usersPage.pageSize;
    },
    getTotalUsersCount(state: AppStateType) {
        // @ts-ignore
        return state.usersPage.totalCount;
    },
    getСurrentPage(state: AppStateType) {
        // @ts-ignore
        return state.usersPage.currentPage;
    },
    getIsFollowingInProgress(state: AppStateType): number[] {
        // @ts-ignore
        return state.usersPage.isFollowingInProgress;
    }
};

export const getUsersSelectors = createSelector(usersBlock.getAllUsers, (users) => {
    return users.filter((u: UserType) => true)
});

