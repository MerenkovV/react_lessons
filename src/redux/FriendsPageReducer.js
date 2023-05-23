let initialState = {
    friends: [
        {name: "Vlados",iter: 1, about: "I study React and Redux", country: "Russia", city: "Tomsk", follow: true },
        { iter: 2, name: "Aboltus", about: "I watch tik tok", country: "Russia", city: "Tomsk", follow: false },
        { iter: 3, name: "Alex", about: "I find a job!", country: "Russia", city: "Tomsk", follow: true },
        { iter: 4, name: "Rustam", about: "I love JANNA", country: "Russia", city: "Tomsk", follow: true },
        { iter: 5, name: "Denis", about: "Do you want a rostelecom card?", country: "Russia", city: "Tomsk", follow: false },
    ],
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

const FriendPageReducer = (state = initialState, action) => {



    if (action.type === "FOLLOW_FRIEND") {
        let friendsCopy = [...state.friends];
        state.friends.map((friend, index) => {
            if (friend.iter === action.payload.id) {
                friendsCopy[index].follow = action.payload.Follow;
            }
        });
        
        return {
            ...state,
            friends: friendsCopy,
        }
    }
    return state;
};

export default FriendPageReducer;