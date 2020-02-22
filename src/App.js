import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Content from './components/content/Content';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Musics from './components/musics/Musics';
import Settings from './components/settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <NavBar />
                <div className="app-wapper-content" >
                    <Route path='/content' component={Content} />
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/musics' component={Musics} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;