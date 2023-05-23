let initialState = {
    friends: [
        {id: 1, name: "Vlados" },
        {id: 3, name: "Alex" },
        {id: 4, name: "Rustam" },
    ]
};

export const AddFriendActionCreator = (Name, id) => {
    return (
        {
            type: "ADD_FRIEND",
            payload: {
                Name: Name,
                id: id,
            }
        }
    )
};
export const DeleteFriendActionCreator = (Name, id) => {
    return (
        {
            type: "DELETE_FRIEND",
            payload: {
                Name: Name,
                id: id,
            }
        }
    )
};

const SidebarPageReducer = (state = initialState, action) => {
    if (action.type === "ADD_FRIEND") {
        return {
            ...state,
            friends: [...state.friends, {name: action.payload.Name, id: action.payload.id}]
        }
    }
    if (action.type === "DELETE_FRIEND") {
        
        let stateCopy = {...state};
        
        stateCopy.friends = [];
        state.friends.map(friend=>{
            if(action.payload.id !== friend.id){
                stateCopy.friends.push({id:friend.id , name:friend.name })
            }
        });
        debugger
        return stateCopy;
    }
    return state;
};

export default SidebarPageReducer;