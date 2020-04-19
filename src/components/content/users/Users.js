import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import man from '../../../../src/assets/images/man.jpg';
import woman from '../../../../src/assets/images/woman.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCountAction(response.data.totalCount);
                console.log('response.data.totalCount--->' + response.data.totalCount);
                
            }
        );
    }

    onPageChanged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span key={p.id}  onClick={(e) => { this.onPageChanged(p) }}
                        className={this.props.currentPage === p && styles.currentPage} >{p} </span>)}
                </div>
                <div>{this.props.users.length !== 0 ? <div></div> :
                    <button onClick={this.getUsers}>Get Users</button>}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : man} className={styles.photo} />
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => { this.props.setUnfollow(u.id) }}>Follow</button> :
                                    <button onClick={() => this.props.setFollow(u.id)}>Unfollow</button>}
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
    }
};

export default Users;