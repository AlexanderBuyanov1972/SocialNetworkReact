import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {createFollowAction, createUnfollowAction, createSetUsersAction, createCurrentPageAction, createTotalUsersCountAction} from '../../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }; 
};
let mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => {dispatch(createFollowAction(userId))},
        setUnfollow: (userId) => {dispatch(createUnfollowAction(userId))},
        setUsers: (users) => {dispatch(createSetUsersAction(users))},
        setCurrentPage:(numberPage) => {dispatch(createCurrentPageAction(numberPage))},
        setTotalUsersCountAction: (totalCount) => {dispatch(createTotalUsersCountAction(totalCount))}
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;