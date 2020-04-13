import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/content/profile/Profile';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import News from './components/content/news/News';
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
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/musics' component={Musics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;