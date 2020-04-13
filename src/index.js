import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import store from './redux/redux-store';
import App from './App';
import ReactDOM from 'react-dom';
import StoreContext from './StoreContext';

export let renderAll = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
        , document.getElementById('root'));
};

renderAll(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderAll(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
