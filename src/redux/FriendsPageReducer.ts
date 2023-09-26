import { ChangeFriend } from './SidebarPageReducer';
import { apiFunctions } from "../api/api";
import { FriendsArrayType } from "../types/types";

const FOLLOW_FRIEND: string = "FOLLOW_FRIEND"
const GET_TOTAL_USERS_COUNT: string = "GET_TOTAL_USERS_COUNT"
const CHANGE_PAGE: string = "CHANGE_PAGE"
const FETCH_PRELOADER: string = "FETCH_PRELOADER"
const FOLLOW_LOAD: string = "FOLLOW_LOAD"
const ADD_USERS: string = "ADD_USERS"


let initialState = {
    friends: [] as Array<FriendsArrayType>,
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [] as Array<number>
};

export const ChangeFollow = (isFollow, id) => ({
    type: FOLLOW_FRIEND,
    payload: {
        Follow: !isFollow,
        id: id,
    }
})

export const GetUsersCount = (count) => ({
    type: GET_TOTAL_USERS_COUNT,
    payload: {
        count: count
    }
})

export const ChangePage = (newPage) => ({
    type: CHANGE_PAGE,
    payload: {
        newPage: newPage
    }
})

export const FetchPreloader = (fetch) => ({
    type: FETCH_PRELOADER,
    payload: {
        fetch
    }
})


export const LoadFollow = (isFollowing, id) => ({ type: FOLLOW_LOAD, isFollowing, id })

export const SetUsers = (newFriends) => {
    let newState = {
        friends: newFriends
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


    if (action.type === FOLLOW_FRIEND) {
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
    } else if (action.type === "ADD_USERS") {
        return {
            ...state,
            friends: action.payload.newState.friends,
        }
    } else if (action.type === "GET_TOTAL_USERS_COUNT") {
        return {
            ...state,
            totalUsersCount: action.payload.count,
        }
    } else if (action.type === "CHANGE_PAGE") {
        return {
            ...state,
            currentPage: action.payload.newPage,
        }
    } else if (action.type === "FETCH_PRELOADER") {
        return {
            ...state,
            isFetching: action.payload.fetch,
        }
    } else if (action.type === "FOLLOW_LOAD") {
        return {
            ...state,
            isFollowing: action.isFollowing ?
                [...state.isFollowing, action.id] :
                state.isFollowing.filter(id => id !== action.id)
        }
    }
    return state;
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