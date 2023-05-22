import {combineReducers, legacy_createStore} from "redux"
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarPageReducer,
});
let store = legacy_createStore(reducers);
export default store;