import { getUsers } from '../api/api';
import { frendsAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helper/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOW_INPROGRESS = 'TOGGLE_IS_FOLLOW_INPROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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

export const getUsersThunk = (numberPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await getUsers(numberPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(numberPage));
}

// --------------------------------------------------------------------------------
const followUnfollowFlow = async (dispatch, userId, methodApi, methodCA) => {
    dispatch(setIsFollowingInProgress(true, userId));
    let resultCode = await methodApi(userId);
    if (resultCode === 0) {
        dispatch(methodCA(userId));
    }
    dispatch(setIsFollowingInProgress(false, userId));
};

export const unfollowThunk = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, frendsAPI.unsubscribeUser, setUnfollow);
};

export const followThunk = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, frendsAPI.subscribeUser, setFollow);
};
// --------------------------------------------------------------------------------
export default usersReducer;