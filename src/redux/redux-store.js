import { createStore, combineReducers } from "redux";
import profilesReducer from './profiles-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilesPage: profilesReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;