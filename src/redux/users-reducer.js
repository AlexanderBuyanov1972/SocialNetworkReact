const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
 
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        default:
            return state;
    }
}
export const createFollowAction = (userId) => {
    return { type: FOLLOW, userId };
}

export const createUnfollowAction = (userId) => {
    return { type: UNFOLLOW, userId };
}

export const createSetUsersAction = (users) => {
    return { type: SET_USERS, users };
}

export const createCurrentPageAction = (number) => {
    return { type: SET_CURRENT_PAGE, currentPage: number };
}

export const createTotalUsersCountAction = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount: count };
}

export default usersReducer;