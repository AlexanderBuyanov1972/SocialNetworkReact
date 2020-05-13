import React from 'react';
import User from './User'
import Paginator from './Paginator';



let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage} />
            {
                props.users.filter(u => true).map(u =>
                    <User key={u.id} user={u} unfollow={props.unfollow} follow={props.follow}
                        isFollowingInProgress={props.isFollowingInProgress} />
                )
            }
        </div>
    );
};

export default Users;