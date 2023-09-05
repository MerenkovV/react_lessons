import { apiFunctions } from "../api/api";

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
            large: 'https://i.pinimg.com/736x/47/16/07/471607026529caa5dbf824e81736be88.jpg'
        }
    },
    posts: [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 10 },
        { text: "Информационные технологии (от англ. IT, Information technology) — это использование компьютерных систем или устройств для передачи информации. Такими технологиями пользуются не только работники IT-сферы, но и все люди на планете — от CEO в корпорациях до продавцов на индийских рынках.", likes: 13 },
        { text: "Человек ежедневно взаимодействует с IT-сферой: хранит, отправляет и скачивает информацию. Мама троих детей, которая добавляет в заметки на iPhone список новогодних подарков, тоже использует информационные технологии.", likes: 20 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 12 },
        { text: "What? How can i do this?", likes: 100 },
        { text: "Hey! I did that!!)))", likes: 500 },
    ],
    id: 29272,
    isFetching: false,
};

export const SendMes = (text) => {
    return (
        {
            type: "ADD-POST",
            PostMessage: text,
        }
    )
};

export const Preloader = (fetch) => {
    return (
        {
            type: "PRELOADER",
            fetch
        }
    )
};

export const ChangeId = (id) => {
    return (
        {
            type: "CHANGE-ID",
            id,
        }
    )
};

export const LoadProfile = (NewProfile) => {
    if (!NewProfile) {
        return (
            {
                type: "LOAD-PROFILE",
                NewProfile: initialState.info
            }
        )
    }
    return (
        {
            type: "LOAD-PROFILE",
            NewProfile
        }
    )
};

const ProfilePageReducer = (state = initialState, action) => {

    if (action.type === "ADD-POST") {
        return {
            ...state,
            posts: [...state.posts, { text: action.PostMessage, likes: 1 }]
        }
    } else if (action.type === "LOAD-PROFILE") {
        return {
            ...state,
            info: action.NewProfile
        }
    } else if (action.type === "CHANGE-ID") {
        return {
            ...state,
            id: action.id
        }
    } else if (action.type === "PRELOADER") {
        return {
            ...state,
            isFetching: action.fetch,
        }
    }

    return state;
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

    }
}

export default ProfilePageReducer;