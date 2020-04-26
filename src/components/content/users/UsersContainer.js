import React from 'react';
import { connect } from 'react-redux';
import { setFollow, setUnfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setIsFollowingInProgress } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../preloader/Preloader';
import { getUsers } from '../../../api/api';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.numberPage, this.props.pageSize).then(
            data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        );
    }

    onPageChanged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.setIsFetching(true);
        getUsers(numberPage, this.props.pageSize).then(
            data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
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
                isFollowingInProgress={this.props.isFollowingInProgress}
                setIsFollowingInProgress={this.props.setIsFollowingInProgress}
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
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    };
};
let mapDispatchToProps = {
    setFollow, setUnfollow, setUsers, setCurrentPage,
    setTotalUsersCount, setIsFetching, setIsFollowingInProgress
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersContainer;