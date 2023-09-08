import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import FriendPageReducer from "./FriendsPageReducer";
import authReducer from "./authReducer";
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
let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;