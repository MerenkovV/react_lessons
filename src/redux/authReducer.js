let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthorized: false
}

export const SetUserData = (data) => {
    return(
      {
        type: "SET_USER_DATA",
        data
      }
    )
};

export default function authReducer(state = initialState, action) {

    switch(action.type){
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data
            }
    }

    return state
}
