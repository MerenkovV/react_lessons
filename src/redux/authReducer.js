import { apiFunctions } from "../api/api";

let initialState = {
    userId: 1,
    login: 1,
    email: 1,
    isAuthorized: false
}

export const SetUserData = (data) => {
    return (
        {
            type: "SET_USER_DATA",
            data
        }
    )
};

export const AddUserData = (data) => {
    return (
        {
            type: "ADD_USER_DATA",
            data
        }
    )
};

export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                userId: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuthorized: action.data.isAuthorized,
            }
        default: return state
    }
}

export const authCheck = () => {
    return (dispatch) => {
        apiFunctions.getAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let userData = {
                        id: data.data.id,
                        login: data.data.login,
                        email: data.data.email,
                        isAuthorized: true
                    }
                    dispatch(SetUserData(userData))
                } else {
                    let userData = {
                        id: null,
                        login: null,
                        email: null,
                        isAuthorized: false
                    }
                    dispatch(SetUserData(userData))
                }
            });
    }
}

export const LoginingInProfile = (email, password, rememberMe) => {
    return (dispatch) => {
        apiFunctions.LogInProfile(email, password, rememberMe)
            .then(() => {
                apiFunctions.getAuth()
                    .then((data) => {
                        if (data.resultCode === 0) {
                            let userData = {
                                id: data.data.id,
                                login: data.data.login,
                                email: data.data.email,
                                isAuthorized: true
                            }
                            dispatch(SetUserData(userData))
                        } else {
                            let userData = {
                                id: null,
                                login: null,
                                email: null,
                                isAuthorized: false
                            }
                            dispatch(SetUserData(userData))
                        }
                    })
            })
    }
}
