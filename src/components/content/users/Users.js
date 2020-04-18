import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import man from '../../../../src/assets/images/man.jpg';
import woman from '../../../../src/assets/images/woman.jpg';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                    props.setUsers(response.data.items);
                }
            );
        }
    }

    return (
        
        <div>
            <div>{props.users.length !== 0 ? <div></div> : 
            <button onClick={getUsers}>Get Users</button>}
        </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : man} className={styles.photo} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.setUnfollow(u.id) }}>Follow</button> :
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


// { id: '1', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU',
//          followed: true, fullName: 'Dmitriy', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//         { id: '2', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: false, fullName: 'Alexander', status: 'I am a boss', location: { city: 'Holon', country: 'Israel' } },
//         { id: '3', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: true, fullName: 'Lubov', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
//         { id: '4', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: false, fullName: 'Darya', status: 'I am a boss', location: { city: 'Paris', country: 'France' } },
//         { id: '5', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: true, fullName: 'Valentina', status: 'I am a boss', location: { city: 'Berlin', country: 'Germany' } }
