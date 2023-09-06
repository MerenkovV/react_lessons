let initialState = {
    friends: [
        {id: 29272, name: "Vlados", picture: null },
        {id: 0, name: "Alex", picture: null },
        {id: -1, name: "Rustam", picture: null },
    ]
};

export const ChangeFriend = (follow, Name, id, picture) => {
    return (
        !follow?
        {
            type: "ADD_FRIEND",
            payload: {
                Name,
                id,
                picture
            }
        }:
        {
            type: "DELETE_FRIEND",
            payload: {
                id
            }
        }
        
    )
};

const SidebarPageReducer = (state = initialState, action) => {
    if (action.type === "ADD_FRIEND") {
        return {
            ...state,
            friends: [...state.friends, {name: action.payload.Name, id: action.payload.id, picture: action.payload.picture}]
        }
    }
    if (action.type === "DELETE_FRIEND") {
        
        // let stateCopy = {...state};
        
        // stateCopy.friends = [];
        // state.friends.map(friend=>{
        //     if(action.payload.id !== friend.id){
        //         stateCopy.friends.push({id:friend.id , name:friend.name, picture: action.payload.picture})
        //     }
        // });
        // return stateCopy;
        return {
            ...state,
                friends: state.friends.filter(object => object.id != action.payload.id)
        }
    }
    return state;
};

export default SidebarPageReducer;