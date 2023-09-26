import { apiFunctions } from "../api/api";

const SET_USER_DATA: string = "SET_USER_DATA"

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuthorized: false,
    isChecked: false
}

type stateType = typeof initialState

type SetUserDataType = {
    type: typeof SET_USER_DATA,
    data: stateType
}

const SetUserData = (data: stateType):SetUserDataType => {
    return (
        {
            type: SET_USER_DATA,
            data
        }
    )
};

export default function authReducer(state = initialState, action: SetUserDataType):stateType {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.data.userId,
                login: action.data.login,
                email: action.data.email,
                isAuthorized: action.data.isAuthorized,
                isChecked: action.data.isChecked
            }
        default: return state
    }
}

export const authCheck = () => {
    return (dispatch) => {
        return takeMeAuth(dispatch)
    }
}

export const LoginingInProfile = (email, password, rememberMe) => {
    return (dispatch) => {
        apiFunctions.LogInProfile(email, password, rememberMe)
            .then(() => {
                return takeMeAuth(dispatch)
            })
    }
}

export const LoginingOutProfile = () => {
    return (dispatch) => {
        apiFunctions.LogOutProfile()
            .then(() => {
                return takeMeAuth(dispatch)
            })
    }
}

const takeMeAuth = (dispatch) => {
    apiFunctions.getAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                let userData: stateType = {
                    userId: data.data.id,
                    login: data.data.login,
                    email: data.data.email,
                    isAuthorized: true,
                    isChecked: true
                }
                dispatch(SetUserData(userData))
            } else {
                let userData: stateType = {
                    userId: null,
                    login: null,
                    email: null,
                    isAuthorized: false,
                    isChecked: true
                }
                dispatch(SetUserData(userData))
            }
        })
}
