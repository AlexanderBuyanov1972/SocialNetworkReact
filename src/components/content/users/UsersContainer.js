import React from 'react';
import { connect } from 'react-redux';
import { followThunk, unfollowThunk, getUsersThunk, getUsersThunk2 } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../preloader/Preloader';
import { getAllUsers, getPageSize, getTotalUsersCount, getСurrentPage, getIsFollowingInProgress } from '../../../redux/users-selectors';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (numberPage) => {
        this.props.getUsers2(numberPage, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    isFollowingInProgress={this.props.isFollowingInProgress}

                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}
        </>
    }
};

let mapDispatchToProps = {
    unfollow: unfollowThunk,
    follow: followThunk,
    getUsers: getUsersThunk,
    getUsers2: getUsersThunk2
};
let mapStateToProps = (state) => ({
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getСurrentPage(state),
    isFollowingInProgress: getIsFollowingInProgress(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);