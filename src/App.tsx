import React, { ComponentType } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import News from './components/content/news/News';
import Musics from './components/content/musics/Musics';
import Settings from './components/content/settings/Settings';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/content/login/Login';
import { compose } from 'redux';
import Preloader from './components/preloader/Preloader';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import { AppStateType } from './redux/redux-store';
import UsersContainer from './components/content/users/UsersContainer'
import { initializeApp } from './redux/app-reducer'

// import ProfileContainer from './components/content/profile/ProfileContainer';
// import DialogsContainer from './components/content/dialogs/DialogsContainer';

const ProfileContainer = React.lazy(() => import('./components/content/profile/ProfileContainer'))
const Dialogs = React.lazy(() => import('./components/content/dialogs/Dialogs'))

const mapStateToProps = (state: AppStateType) => ({ initialized: state.app.initialized })
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapDispatchToProps = { initializeApp }
type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        console.log("Some error occurred")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componenetWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                    <Route path='/dialogs/' render={withSuspense(Dialogs)} />
                    <Route path='/users' render={() => <UsersContainer pageTitle={'Hello World!!!'} />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' component={News} />
                    <Route path='/musics' component={Musics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        );
    }

}

export default compose<ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);