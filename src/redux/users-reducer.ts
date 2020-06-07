import { getUsers } from '../api/api';
import { frendsAPI } from '../api/api';
import { updateObjectInArray } from '../utils/helper/object-helpers';
import { UserType } from '../types/types';
import { AppStateType, AppDispatchType, InferActionsTypes } from './redux-store';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

let initialState = {
    users: Array<UserType>(),
    isFollowingInProgress: Array<number>(),
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
};
type UsersStateType = typeof initialState;

const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
    debugger
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            };
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalCount: action.totalCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOW_INPROGRESS':
            return {
                ...state,
                isFollowingInProgress: action.isFetching ?
                    [...state.isFollowingInProgress, action.userId] :
                    state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    setFollow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    setUnfollow: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: UserType[]) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalCount } as const),
    setIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    setIsFollowingInProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOW_INPROGRESS', isFetching, userId } as const)
}
type ActionsTypes = InferActionsTypes<typeof actions>

type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, null, Action<string>>

export const getUsersThunk = (numberPage: number, pageSize: number): ThunkType => {
    return async (dispatch: AppDispatchType, getState: GetStateType) => {
        dispatch(actions.setIsFetching(true));
        let response = await getUsers(numberPage, pageSize);
        dispatch(actions.setIsFetching(false));
        dispatch(actions.setUsers(response.data.items));
        dispatch(actions.setTotalUsersCount(response.data.totalCount));
        dispatch(actions.setCurrentPage(numberPage));
    }
}

const _followUnfollowFlow = (dispatch: AppDispatchType, userId: number,
    methodApi: any, methodCA: (userId: number) => ActionsTypes): ThunkType => {
    return async (dispatch: AppDispatchType, getState: GetStateType) => {
        dispatch(actions.setIsFollowingInProgress(true, userId));
        let resultCode = await methodApi(userId);
        if (resultCode === 0) {
            dispatch(methodCA(userId));
        }
        dispatch(actions.setIsFollowingInProgress(false, userId));
    }

};

export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch: AppDispatchType) => {
        _followUnfollowFlow(dispatch, userId, frendsAPI.unsubscribeUser, actions.setUnfollow);
    }
};

export const followThunk = (userId: number): ThunkType => {
    return async (dispatch: AppDispatchType) => {
        _followUnfollowFlow(dispatch, userId, frendsAPI.subscribeUser, actions.setFollow);
    }
};

export default usersReducer;