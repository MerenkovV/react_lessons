import {combineReducers, legacy_createStore} from "redux"
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import FriendPageReducer from "./FriendsPageReducer";

let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarPageReducer,
    friendsPage: FriendPageReducer,
});
let store = legacy_createStore(reducers);

export default store;