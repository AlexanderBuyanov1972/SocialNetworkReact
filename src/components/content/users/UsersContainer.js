import React from 'react';
import { connect } from 'react-redux';
import { createFollowAction, createUnfollowAction, createSetUsersAction, createCurrentPageAction, createTotalUsersCountAction, createIsFetchingAction } from '../../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../preloader/Preloader';

class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChanged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            }
        );
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                setUnfollow={this.props.setUnfollow}
                setFollow={this.props.setFollow}
                onPageChanged={this.onPageChanged}
            />}
            
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => { dispatch(createFollowAction(userId)) },
        setUnfollow: (userId) => { dispatch(createUnfollowAction(userId)) },
        setUsers: (users) => { dispatch(createSetUsersAction(users)) },
        setCurrentPage: (numberPage) => { dispatch(createCurrentPageAction(numberPage)) },
        setTotalUsersCount: (totalCount) => { dispatch(createTotalUsersCountAction(totalCount)) },
        setIsFetching: (flag) => { dispatch(createIsFetchingAction(flag)) }
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersContainer;