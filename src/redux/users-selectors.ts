import { UserType } from '../types/types';
import { createSelector } from "reselect";
import { AppStateType } from "../redux/redux-store";

export const usersBlock = {
    getAllUsers(state: AppStateType) {
        return state.usersPage.users;
    },
    getPageSize(state: AppStateType) {
        return state.usersPage.pageSize;
    },
    getTotalUsersCount(state: AppStateType) {
        return state.usersPage.totalCount;
    },
    getСurrentPage(state: AppStateType) {
        return state.usersPage.currentPage;
    },
    getIsFollowingInProgress(state: AppStateType): number[] {
        return state.usersPage.isFollowingInProgress;
    }
};

export const getUsersSelectors = createSelector(usersBlock.getAllUsers, (users) => {
    return users.filter((u: UserType) => true)
});

