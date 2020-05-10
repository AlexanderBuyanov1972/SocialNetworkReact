import { createSelector } from "reselect";

export const usersBlock = {
    getAllUsers(state) {
        return state.usersPage.users;
    },
    getPageSize(state) {
        return state.usersPage.pageSize;
    },
    getTotalUsersCount(state) {
        return state.usersPage.totalUsersCount;
    },
    getСurrentPage(state) {
        return state.usersPage.currentPage;
    },
    getIsFollowingInProgress(state) {
        return state.usersPage.isFollowingInProgress;
    }
};

export const getUsersSelectors = createSelector(usersBlock.getAllUsers, (users) => {
    return users.filter(u => true)
});

