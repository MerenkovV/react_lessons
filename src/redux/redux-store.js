import {applyMiddleware, combineReducers, legacy_createStore, compose} from "redux"
import ProfilePageReducer from "./ProfilePageReducer.ts";
import DialogsPageReducer from "./DialogsPageReducer.ts";
import SidebarPageReducer from "./SidebarPageReducer.ts";
import FriendPageReducer from "./FriendsPageReducer.ts";
import authReducer from "./authReducer.ts";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarPageReducer,
    friendsPage: FriendPageReducer,
    auth: authReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)))

window.store = store;

export default store;