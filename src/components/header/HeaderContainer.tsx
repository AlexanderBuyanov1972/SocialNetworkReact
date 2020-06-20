import React from 'react';
import { authUserThunk, logoutUserThunk } from '../../redux/auth-reducer';
import Header, { PropsHeaderType } from './Header';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

const HeaderContainer: React.FC<PropsHeaderType> = (props) => {
    return (
        <Header {...props} />
    );
};

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
});

let mapDispatchToProps = {
    authUser: authUserThunk,
    logout: logoutUserThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);