import { apiFunctions } from "../api/api";
import { InfoType, PostType } from "../types/types";

const ADD_POST: string = "ADD-POST"
const PRELOADER: string = "PRELOADER"
const CHANGE_ID: string = "CHANGE_ID"
const LOAD_PROFILE: string = "LOAD_PROFILE"
const LOAD_PROFILE_STATUS: string = "LOAD_PROFILE_STATUS"
const PUT_PROFILE_STATUS: string = "PUT_PROFILE_STATUS"

let initialState = {
    info: {
        fullName: "Vladislav M.",
        aboutMe: "Hi everyone",
        lookingForAJob: true,
        lookingForAJobDescription: "I shure i will find it",
        contacts: {
            github: "https://github.com/MerenkovV"
        },
        photos: {
            large: 'https://i.pinimg.com/736x/47/16/07/471607026529caa5dbf824e81736be88.jpg',
            small: null
        },
    } as InfoType,
    status: null as string | null,
    posts: [
        { text: "Hey guys! What's going on? I'm here to tell u a halarious story! It was a winter when I was walking in the park nearly to The Great Bridge. Actually, It was a chilly day and snow was going. I walked toward a snowy road and saw how nature can be so beautiful.", likes: 10000 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 10 },
        { text: "Информационные технологии (от англ. IT, Information technology) — это использование компьютерных систем или устройств для передачи информации. Такими технологиями пользуются не только работники IT-сферы, но и все люди на планете — от CEO в корпорациях до продавцов на индийских рынках.", likes: 13 },
        { text: "Человек ежедневно взаимодействует с IT-сферой: хранит, отправляет и скачивает информацию. Мама троих детей, которая добавляет в заметки на iPhone список новогодних подарков, тоже использует информационные технологии.", likes: 20 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 12 },
        { text: "What? How can i do this?", likes: 100 },
        { text: "Hey! I did that!!)))", likes: 500 },
    ] as Array<PostType>,
    id: 29272,
    isFetching: false,
};

type StateType = typeof initialState

type SendMesType = {
    type: typeof ADD_POST
    PostMessage: string
}
export const SendMes = (text: string):SendMesType =>  ({type: ADD_POST , PostMessage: text})

type PreloaderType = {type: typeof PRELOADER, fetch: boolean}
export const Preloader = (fetch:boolean):PreloaderType => ({type: PRELOADER, fetch})

type ChangeIdType = {type: typeof CHANGE_ID, id: number}
export const ChangeId = (id: number):ChangeIdType => ({type: CHANGE_ID,id})

type LoadProfileType = {type: typeof LOAD_PROFILE, NewProfile: InfoType}
export const LoadProfile = (NewProfile: InfoType | null): LoadProfileType => ({type: LOAD_PROFILE, 
NewProfile: !NewProfile ? initialState.info : NewProfile})

type ChangeProfileStatusType = {type: typeof LOAD_PROFILE_STATUS | typeof PUT_PROFILE_STATUS, status: string}
const ChangeProfileStatus = (status: string, isLoad: boolean):ChangeProfileStatusType => ({type: isLoad ? 
    LOAD_PROFILE_STATUS : PUT_PROFILE_STATUS, status})

const ProfilePageReducer = (state = initialState, action: any): StateType => {

    switch (action.type){
        case ADD_POST: return {
            ...state,
            posts: [...state.posts, { text: action.PostMessage, likes: 1 }]
        }
        case LOAD_PROFILE: return {
            ...state,
            info: action.NewProfile
        }
        case CHANGE_ID: return {
            ...state,
            id: action.id
        }
        case PRELOADER: return {
            ...state,
            isFetching: action.fetch,
        }
        case LOAD_PROFILE_STATUS: return {
            ...state,
            status: action.status,
        }
        case PUT_PROFILE_STATUS: return {
            ...state,
            status: action.status,
        }
        default: return state
    }
};

export const loadUserProfile = (id) => {
    return (dispatch) => {
        if (id === 29272) {
            dispatch(LoadProfile(null))
        } else {
            dispatch(Preloader(true));
            apiFunctions.getProfile(id)
                .then((data) => {
                    dispatch(LoadProfile(data))
                    dispatch(Preloader(false));
                });
        }
        apiFunctions.getStatus(id)
            .then((data) => {
                dispatch(ChangeProfileStatus(data.data, true))
            });
    }
}

export const putStatus = (status) => {
    return (dispatch) => {
        apiFunctions.putStatus(status)
        .then((response)=>{
            if(response === 0){
                dispatch(ChangeProfileStatus(status, false))
            }
        })
    }
}

export default ProfilePageReducer;