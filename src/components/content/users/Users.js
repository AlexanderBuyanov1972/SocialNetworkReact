import React from 'react';
import styles from './Users.module.css';
import man from '../../../../src/assets/images/man.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        { withCredentials: true, headers: { "API-KEY": "173f41e8-aa06-428c-aef6-e95c8d5f1b62" } }).then(
                                            response => {
                                                if (response.data.resultCode == 0) {
                                                    props.setUnfollow(u.id)
                                                }
                                            }
                                        );
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {}, { withCredentials: true,
                                             headers: {
                                                  "API-KEY": "173f41e8-aa06-428c-aef6-e95c8d5f1b62" 
                                                } 
                                            }).then(
                                            response => {
                                                if (response.data.resultCode == 0) {
                                                    props.setFollow(u.id)
                                                }
                                            }
                                        );
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