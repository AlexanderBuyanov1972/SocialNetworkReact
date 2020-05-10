import { getUsers } from '../api/api';
import { frendsAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOW_INPROGRESS = 'TOGGLE_IS_FOLLOW_INPROGRESS';
const FAKE = 'FAKE';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
    fake: 10

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAKE:
            return { ...state, fake: state.fake};
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOW_INPROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching ?
                    [...state.isFollowingInProgress, action.userId] :
                    [state.isFollowingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}
export const setFake = () => {
    return { type: FAKE};
}
export const setFollow = (userId) => {
    return { type: FOLLOW, userId };
}

export const setUnfollow = (userId) => {
    return { type: UNFOLLOW, userId };
}

export const setUsers = (users) => {
    return { type: SET_USERS, users };
}

export const setCurrentPage = (number) => {
    return { type: SET_CURRENT_PAGE, currentPage: number };
}

export const setTotalUsersCount = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount: count };
}

export const setIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
}

export const setIsFollowingInProgress = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOW_INPROGRESS, isFetching, userId };
}

export const getUsersThunk = (numberPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        getUsers(numberPage, pageSize).then(
            data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            }
        );
    };
};

export const getUsersThunk2 = (numberPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(numberPage));
        dispatch(setIsFetching(true));
        getUsers(numberPage, pageSize).then(
            data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
            }
        );
    };
};

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId));
        frendsAPI.unsubscribeUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(setUnfollow(userId));
            }
            dispatch(setIsFollowingInProgress(false, userId));
        });
    }
};

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId));
        frendsAPI.subscribeUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(setFollow(userId));
            }
            dispatch(setIsFollowingInProgress(false, userId));
        });
    }
};

export default usersReducer;