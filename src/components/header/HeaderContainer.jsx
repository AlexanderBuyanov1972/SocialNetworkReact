import React from 'react';
import { setAuthUserData } from '../../redux/auth-reducer';
import * as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(
            response => {
                if (response.data.resultCode === 0) {
                    let data = {
                        userId: response.data.data.id,
                        login: response.data.data.login,
                        email: response.data.data.email
                    };
                    this.props.setAuthUserData(data);
                }
            }
        );
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
let mapDispatchToProps = {
    setAuthUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);