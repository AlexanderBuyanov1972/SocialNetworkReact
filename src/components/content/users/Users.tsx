import React from 'react';
import User from './User'
import Paginator from './Paginator';
import { UserType } from '../../../types/types'

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    
    users: Array<UserType>
    unfollow: (userId: number| null) => void
    follow: (userId: number | null) => void
    isFollowingInProgress: Array<number>
}

let Users: React.FC<PropsType> = ({ totalCount, pageSize, currentPage, onPageChanged,
     users, unfollow, follow, isFollowingInProgress }) => {
    return (
        <div>
            <Paginator totalCount={totalCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
            {
                users.filter(u => true).map((u: UserType )=>
                    <User key={u.id} user={u} unfollow={unfollow} follow={follow} isFollowingInProgress={isFollowingInProgress} />
                )
            }
        </div>
    );
};

export default Users;