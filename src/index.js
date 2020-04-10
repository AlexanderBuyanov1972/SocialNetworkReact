import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';

export let renderAll = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};

renderAll(store.getState());

store.subscribe(renderAll);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
