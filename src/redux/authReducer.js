import { apiFunctions } from "../api/api";

let initialState = {
    userId: null,
    login: null,
    email: null,
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

export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data
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
                }
            });
    }
}
