const ADD_FRIEND:string = "ADD_FRIEND"
const DELETE_FRIEND:string = "DELETE_FRIEND"

type stateType = {
    friends: Array<{
        id: number
        name: string
        picture: string | null
    }>
}

type ChangeFriendType = {
    type: typeof ADD_FRIEND | typeof DELETE_FRIEND
    payload: {
        id: number
        Name: string
        picture: string | null
    }
}

let initialState:stateType = {
    friends: [
        {id: 29272, name: "Vlados", picture: null },
        {id: 0, name: "Alex", picture: null },
        {id: -1, name: "Rustam", picture: null },
    ]
};

export const ChangeFriend = (
    follow: boolean, 
    Name: string, 
    id: number, 
    picture: string | null
    ):ChangeFriendType => {
    return (
        {
            type: !follow?ADD_FRIEND : DELETE_FRIEND,
            payload: {
                Name,
                id,
                picture
            }
        }
    )
};

const SidebarPageReducer = (state: stateType = initialState, action: ChangeFriendType):stateType => {
    if (action.type === ADD_FRIEND) {
        return {
            ...state,
            friends: [...state.friends, {name: action.payload.Name, id: action.payload.id, picture: action.payload.picture}]
        }
    }
    if (action.type === DELETE_FRIEND) {
        return {
            ...state,
                friends: state.friends.filter(object => object.id !== action.payload.id)
        }
    }
    return state;
};

export default SidebarPageReducer;