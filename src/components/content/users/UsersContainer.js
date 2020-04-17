import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {createFollowAction, createUnfollowAction, createSetUsersAction} from '../../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => {dispatch(createFollowAction(userId))},
        setUnfollow: (userId) => {dispatch(createUnfollowAction(userId))},
        setUsers: (users) => {dispatch(createSetUsersAction(users))}
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;