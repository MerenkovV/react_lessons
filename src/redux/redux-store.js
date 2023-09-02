import {combineReducers, legacy_createStore} from "redux"
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import FriendPageReducer from "./FriendsPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarPageReducer,
    friendsPage: FriendPageReducer,
    auth: authReducer
});
let store = legacy_createStore(reducers);

window.store = store;

export default store;