import React from 'react';
import { NavLink } from 'react-router-dom';
import man from '../../../../src/assets/images/man.jpg';
import styles from './Users.module.css';
import { UserType } from '../../../types/types';

type PropsType = {
    user: UserType
    isFollowingInProgress: Array<number>
    unfollow: (id: number | null) => void
    follow: (id: number | null) => void
}

const User:React.FC<PropsType> = (props: PropsType) => {
    let u = props.user;
    return (<div>
        <div>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : man} className={styles.photo} />
            </NavLink>
        </div>
        <div>
            {u.followed ?
                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id);
                }}>Unfollow</button> :
                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id);
                }}>Follow</button>}
        </div>
        <div>
            {u.name}
        </div>
        <div>
            {u.status}
        </div>
        <div>
            {u.id}
        </div>
        <div>
            {'u.location.city'}
        </div>
        <div>
            {'u.location.country'}
        </div>
    </div>);
}

export default User;