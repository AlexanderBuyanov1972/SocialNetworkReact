import React from 'react';
import { connect } from 'react-redux';
import { followThunk, unfollowThunk, getUsersThunk } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../preloader/Preloader';
import { usersBlock, getUsersSelectors } from '../../../redux/users-selectors';
import { UserType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalCount: number
    users: Array<UserType>
    isFollowingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: any
    unfollow: any
    getUsers: any
}
type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (numberPage: number) => {
        const { pageSize } = this.props
        this.props.getUsers(numberPage, pageSize);
    };

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ?
                <Preloader />
                : <Users
                    totalCount={this.props.totalCount}
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

let mapDispatchToProps: MapDispatchPropsType = {
    unfollow: unfollowThunk,
    follow: followThunk,
    getUsers: getUsersThunk
};
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelectors(state),
        pageSize: usersBlock.getPageSize(state),
        totalCount: usersBlock.getTotalUsersCount(state),
        currentPage: usersBlock.getСurrentPage(state),
        isFollowingInProgress: usersBlock.getIsFollowingInProgress(state)
    } as MapStatePropsType
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);