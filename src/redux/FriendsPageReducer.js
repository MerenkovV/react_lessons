
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
    friends: []
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

export const SetUsersActionCreator = (newFriends) => {
    let newState = {
        friends: [
            ...newFriends
        ]
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
    }
    return state;
};

export default FriendPageReducer;