// @ts-ignore
import { ChangeFriend } from './SidebarPageReducer.ts';
import { apiFunctions } from "../api/api";
import { FriendsObjectType } from "../types/types";

const FOLLOW_FRIEND: string = "FOLLOW_FRIEND"
const GET_TOTAL_USERS_COUNT: string = "GET_TOTAL_USERS_COUNT"
const CHANGE_PAGE: string = "CHANGE_PAGE"
const FETCH_PRELOADER: string = "FETCH_PRELOADER"
const FOLLOW_LOAD: string = "FOLLOW_LOAD"
const ADD_USERS: string = "ADD_USERS"


let initialState = {
    friends: [] as Array<FriendsObjectType>,
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [] as Array<number>
};

type ChangeFollowType = { type: typeof FOLLOW_FRIEND, payload: { Follow: boolean, id: number } }
export const ChangeFollow = (isFollow: boolean, id: number): ChangeFollowType => ({
    type: FOLLOW_FRIEND,
    payload: {
        Follow: !isFollow,
        id: id,
    }
})

type GetUsersCountType = { type: typeof GET_TOTAL_USERS_COUNT, payload: { count: number } }
export const GetUsersCount = (count: number): GetUsersCountType => ({
    type: GET_TOTAL_USERS_COUNT,
    payload: {
        count: count
    }
})

type ChangePageType = { type: typeof CHANGE_PAGE, payload: { newPage: FriendsObjectType } }
export const ChangePage = (newPage: FriendsObjectType): ChangePageType => ({
    type: CHANGE_PAGE,
    payload: {
        newPage: newPage
    }
})

type FetchPreloaderType = { type: typeof FETCH_PRELOADER, payload: { fetch: boolean } }
export const FetchPreloader = (fetch): FetchPreloaderType => ({
    type: FETCH_PRELOADER,
    payload: {
        fetch
    }
})

type LoadFollowType = { type: typeof FOLLOW_LOAD, payload: { isFollowing: boolean, id: number } }
export const LoadFollow = (isFollowing: boolean, id: number): LoadFollowType => ({
    type: FOLLOW_LOAD,
    payload: { isFollowing, id }
})

type SetUsersType = { type: typeof ADD_USERS, payload: { newState: { friends: Array<FriendsObjectType> } } }
export const SetUsers = (newFriends: Array<FriendsObjectType>): SetUsersType => {
    let newState = {
        friends: newFriends as Array<FriendsObjectType>
    }
    return (
        {
            type: ADD_USERS,
            payload: {
                newState: newState
            }
        }
    )
};

const FriendPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_FRIEND:
            let friendsCopy = [...state.friends];
            state.friends.forEach((friend, index) => {
                if (friend.id === action.payload.id) {
                    friendsCopy[index].followed = action.payload.Follow;
                }
            });
            return {
                ...state,
                friends: friendsCopy,
            }
        case ADD_USERS: return {
            ...state,
            friends: action.payload.newState.friends,
        }
        case GET_TOTAL_USERS_COUNT: return {
            ...state,
            totalUsersCount: action.payload.count,
        }
        case CHANGE_PAGE: return {
            ...state,
            currentPage: action.payload.newPage,
        }
        case FETCH_PRELOADER: return {
            ...state,
            isFetching: action.payload.fetch,
        }
        case FOLLOW_LOAD: return {
            ...state,
            isFollowing: action.payload.isFollowing ?
                [...state.isFollowing, action.payload.id] :
                state.isFollowing.filter(id => id !== action.payload.id)
        }
        default: return state
    }
};

export const getPage = (newPage, pageSize) => {
    return (dispatch) => {
        dispatch(ChangePage(newPage));
        dispatch(FetchPreloader(true))
        apiFunctions.getUsers(newPage, pageSize)
            .then((data) => {
                dispatch(SetUsers(data.items));
                dispatch(GetUsersCount(data.totalCount))
                dispatch(FetchPreloader(false))
            });
    }
}

export const addUserFollow = (followed, name, id, photo) => {
    return (dispatch) => {
        dispatch(LoadFollow(true, id))
        apiFunctions.addFollow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(ChangeFriend(followed, name, id, photo))
                    dispatch(ChangeFollow(followed, id))
                }
                dispatch(LoadFollow(false, id))
            });
    }
}

export const delUserFollow = (followed, name, id, photo) => {
    return (dispatch) => {
        dispatch(LoadFollow(true, id))
        apiFunctions.deleteFollow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(ChangeFriend(followed, name, id, photo))
                    dispatch(ChangeFollow(followed, id))
                }
                dispatch(LoadFollow(false, id))
            });
    }
}

export default FriendPageReducer;