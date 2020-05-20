import { getUsers } from '../api/api';
import { frendsAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helper/object-helpers';
import { UserType } from '../types/types';

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
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};
type StateType = typeof initialState;

type ActionType = {
    type: typeof FOLLOW | typeof UNFOLLOW | typeof SET_USERS | typeof SET_CURRENT_PAGE |
    typeof SET_TOTAL_USERS_COUNT | typeof TOGGLE_IS_FETCHING | typeof TOGGLE_IS_FOLLOW_INPROGRESS
    users: Array<UserType>,
    pageSize: number | null
    totalCount: number | null
    currentPage: number | null
    isFetching: boolean
    isFollowingInProgress: Array<number>
    userId: number | null
};

const usersReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            } as StateType;
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
                ...state, totalCount: action.totalCount
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
export const setFollow = (userId: number | null) => {
    return { type: FOLLOW, userId };
}

export const setUnfollow = (userId: number | null) => {
    return { type: UNFOLLOW, userId };
}

export const setUsers = (users: Array<UserType>) => {
    return { type: SET_USERS, users };
}

export const setCurrentPage = (number: number | null | undefined) => {
    return { type: SET_CURRENT_PAGE, currentPage: number };
}

export const setTotalUsersCount = (totalCount: number | null) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount };
}

export const setIsFetching = (isFetching: boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
}

export const setIsFollowingInProgress = (isFetching: boolean, userId: number | null) => {
    return { type: TOGGLE_IS_FOLLOW_INPROGRESS, isFetching, userId };
}

export const getUsersThunk = (numberPage: number | undefined, pageSize: number | undefined) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    let data = await getUsers(numberPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(numberPage));
}

// --------------------------------------------------------------------------------
const followUnfollowFlow = async (dispatch: any, userId: number | null, methodApi: any, methodCA: any) => {
    dispatch(setIsFollowingInProgress(true, userId));
    let resultCode = await methodApi(userId);
    if (resultCode === 0) {
        dispatch(methodCA(userId));
    }
    dispatch(setIsFollowingInProgress(false, userId));
};

export const unfollowThunk = (userId: number | null) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, frendsAPI.unsubscribeUser, setUnfollow);
};

export const followThunk = (userId: number | null) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, frendsAPI.subscribeUser, setFollow);
};
// --------------------------------------------------------------------------------
export default usersReducer;