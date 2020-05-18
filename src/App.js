import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import News from './components/content/news/News';
import UsersContainer from './components/content/users/UsersContainer';
import Musics from './components/content/musics/Musics';
import Settings from './components/content/settings/Settings';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/content/login/Login';
import { initializeApp } from './redux/app-reducer.ts';
import { compose } from 'redux';
import Preloader from './components/preloader/Preloader';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';

// import ProfileContainer from './components/content/profile/ProfileContainer';
// import DialogsContainer from './components/content/dialogs/DialogsContainer';

const ProfileContainer = React.lazy(() => import('./components/content/profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/content/dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper" >
                <HeaderContainer />
                <NavBar />
                <div className="app-wapper-content" >
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs/' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' component={News} />
                    <Route path='/musics' component={Musics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        );
    }
};

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let mapDispatchToProps = { initializeApp };

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
    (App);