import React from 'react';
import { setAuthUserData, authUserThunk } from '../../redux/auth-reducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser();
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
    setAuthUserData,
    authUser: authUserThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);