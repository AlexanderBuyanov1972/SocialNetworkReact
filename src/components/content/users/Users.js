import React from 'react';
import styles from './Users.module.css';
import man from '../../../../src/assets/images/man.jpg';

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
                            <img src={u.photos.small != null ? u.photos.small : man} className={styles.photo} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.setUnfollow(u.id)}>Follow</button> :
                                <button onClick={() => props.setFollow(u.id)}>Unfollow</button>}
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