import { createStore, combineReducers, applyMiddleware } from "redux";
import profilesReducer from './profiles-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer.ts';
import appReducer from './app-reducer.ts';
import sidebarReducer from './sidebar-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { compose } from 'redux';

let reducers = combineReducers({
    profilesPage: profilesReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    sidebar: sidebarReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;

export default store;