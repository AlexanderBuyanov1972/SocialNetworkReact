import React from 'react';
// import state from './redux/state';
import {addPost} from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';

export let renderAll = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
};