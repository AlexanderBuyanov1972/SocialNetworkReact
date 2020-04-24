import React from 'react';
import { setAuthUserData } from '../../redux/auth-reducer';
import * as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true,
        headers: {
            "API-KEY": "173f41e8-aa06-428c-aef6-e95c8d5f1b62" 
          }  }).then(
            response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
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
    login: state.auth.data.login
});
let mapDispatchToProps = {
    setAuthUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);