import React from 'react';
import { connect } from 'react-redux';
import { followThunk, unfollowThunk, getUsersThunk, getUsersThunk2 } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../preloader/Preloader';
import { usersBlock, getUsersSelectors } from '../../../redux/users-selectors';

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
let mapStateToProps = (state) => {
    return {
        users: getUsersSelectors(state),
        pageSize: usersBlock.getPageSize(state),
        totalUsersCount: usersBlock.getTotalUsersCount(state),
        currentPage: usersBlock.getСurrentPage(state),
        isFollowingInProgress: usersBlock.getIsFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);