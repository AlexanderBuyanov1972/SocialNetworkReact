import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import ProfileContainer from './components/content/profile/ProfileContainer';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import News from './components/content/news/News';
import UsersContainer from './components/content/users/UsersContainer';
import Musics from './components/content/musics/Musics';
import Settings from './components/content/settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';



function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <NavBar />
                <div className="app-wapper-content" >
                    <Route path='/profile' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/musics' component={Musics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;