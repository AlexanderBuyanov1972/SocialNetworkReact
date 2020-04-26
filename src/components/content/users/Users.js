import React from 'react';
import styles from './Users.module.css';
import man from '../../../../src/assets/images/man.jpg';
import { NavLink } from 'react-router-dom';
import { frendsAPI } from '../../../api/api'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span onClick={(e) => { props.onPageChanged(p) }}
                    className={props.currentPage === p && styles.currentPage} >{p} </span>)}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : man} className={styles.photo} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    
                                    props.setIsFollowingInProgress(true, u.id);
                                    frendsAPI.unsubscribeUser(u.id).then(resultCode => {
                                        if (resultCode == 0) {
                                            props.setUnfollow(u.id);
                                        }
                                        props.setIsFollowingInProgress(false, u.id);
                                    });
                                }}>Unfollow</button> :
                                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    
                                    props.setIsFollowingInProgress(true, u.id);
                                    frendsAPI.subscribeUser(u.id).then(resultCode => {
                                        if (resultCode == 0) {
                                            props.setFollow(u.id);
                                        }
                                        props.setIsFollowingInProgress(false, u.id);
                                    });
                                }}>Follow</button>}
                        </div>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                        <div>
                            {'u.location.country'}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;