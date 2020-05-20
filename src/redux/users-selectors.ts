import { createSelector } from "reselect";
import { UserType } from "../types/types";

export const usersBlock = {
    getAllUsers(state: any) {
        return state.usersPage.users;
    },
    getPageSize(state: any) {
        return state.usersPage.pageSize;
    },
    getTotalUsersCount(state: any) {
        return state.usersPage.totalUsersCount;
    },
    getСurrentPage(state: any) {
        return state.usersPage.currentPage;
    },
    getIsFollowingInProgress(state: any) {
        return state.usersPage.isFollowingInProgress;
    }
};

export const getUsersSelectors = createSelector(usersBlock.getAllUsers, (users) => {
    return users
});

