
// let initialState = {
//     friends: [
//         {name: "Vlados",iter: 1, about: "I study React and Redux", country: "Russia", city: "Tomsk", follow: true },
//         { iter: 2, name: "Aboltus", about: "I watch tik tok", country: "Russia", city: "Tomsk", follow: false },
//         { iter: 3, name: "Alex", about: "I find a job!", country: "Russia", city: "Tomsk", follow: true },
//         { iter: 4, name: "Rustam", about: "I love JANNA", country: "Russia", city: "Tomsk", follow: true },
//         { iter: 5, name: "Denis", about: "Do you want a rostelecom card?", country: "Russia", city: "Tomsk", follow: false },
//     ],
// };

let initialState = {
    friends: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
};




export const FollowFriendActionCreator = (isFollow, id) => {
    return (
        {
            type: "FOLLOW_FRIEND",
            payload: {
                Follow: !isFollow,
                id: id,
            }
        }
    )
};

export const AddUsersActionCreator = (newState) => {
    return (
        {
            type: "ADD_USERS",
            payload: {
                newState: newState
            }
        }
    )
};

export const GetTotalUsersCountActionCreator = (count) => {
    return (
        {
            type: "GET_TOTAL_USERS_COUNT",
            payload: {
                count: count
            }
        }
    )
};

export const ChangePageActionCreator = (newPage) => {
    return (
        {
            type: "CHANGE_PAGE",
            payload: {
                newPage: newPage
            }
        }
    )
};

export const SetUsersActionCreator = (newFriends) => {
    let newState = {
        friends: newFriends
    }
    return (
        {
            type: "ADD_USERS",
            payload: {
                newState: newState
            }
        }
    )
};

const FriendPageReducer = (state = initialState, action) => {

    
    if (action.type === "FOLLOW_FRIEND") {
        let friendsCopy = [...state.friends];
        
        state.friends.map((friend, index) => {
            if (friend.id === action.payload.id) {
                friendsCopy[index].followed = action.payload.Follow;
                
            }
        });
        
        return {
            ...state,
            friends: friendsCopy,
        }
    }else if(action.type === "ADD_USERS"){
        return {
            ...state,
            friends: action.payload.newState.friends,
        }
    }else if(action.type === "GET_TOTAL_USERS_COUNT"){
        return {
            ...state,
            totalUsersCount: action.payload.count,
        }
    }else if(action.type === "CHANGE_PAGE"){
        return {
            ...state,
            currentPage: action.payload.newPage,
        }
    }
    return state;
};

export default FriendPageReducer;