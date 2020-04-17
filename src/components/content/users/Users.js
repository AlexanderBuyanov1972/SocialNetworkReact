import React from 'react';
import styles from './Users.module.css';



const Users = (props) => {
    if (props.users.length === 0) {
props.setUsers(
    [
        { id: '1', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU',
         followed: true, fullName: 'Dmitriy', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: '2', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: false, fullName: 'Alexander', status: 'I am a boss', location: { city: 'Holon', country: 'Israel' } },
        { id: '3', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: true, fullName: 'Lubov', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: '4', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: false, fullName: 'Darya', status: 'I am a boss', location: { city: 'Paris', country: 'France' } },
        { id: '5', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQThM0OYzf3g_43wpApcVbemcL0K1HMeI5svAM2Ym2GsHJM6EGK&usqp=CAU', followed: true, fullName: 'Valentina', status: 'I am a boss', location: { city: 'Berlin', country: 'Germany' } }

    ]
);
    }
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img src={u.photoUrl} className={styles.photo} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.setUnfollow(u.id)}}>Follow</button> :
                                <button onClick={() => props.setFollow(u.id)}>Unfollow</button>}
                        </div>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                    </div>
                )
            }
        </div>
    );

};

export default Users;