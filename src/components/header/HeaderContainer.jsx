import React from 'react';
import { authUserThunk, logoutUserThunk } from '../../redux/auth-reducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
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
    authUser: authUserThunk,
    logout: logoutUserThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);