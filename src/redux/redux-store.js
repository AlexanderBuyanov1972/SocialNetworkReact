import { createStore, combineReducers } from "redux";
import profilesReducer from './profiles-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilesPage: profilesReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;