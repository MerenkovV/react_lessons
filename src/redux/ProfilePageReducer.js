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
        },
    },
    status: null,
    posts: [
        { text: "Hey guys! What's going on? I'm here to tell u a halarious story! It was a winter when I was walking in the park nearly to The Great Bridge. Actually, It was a chilly day and snow was going. I walked toward a snowy road and saw how nature can be so beautiful.", likes: 10000 },
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

export const loadProfileStatus = (status) => {
    return (
        {
            type: "LOAD-PROFILE-STATUS",
            status
        }
    )
}

export const putProfileStatus = (status) => {
    return (
        {
            type: "PUT-PROFILE-STATUS",
            status
        }
    )
}

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
    } else if (action.type === "LOAD-PROFILE-STATUS") {
        return {
            ...state,
            status: action.status,
        }
    } else if (action.type === "PUT-PROFILE-STATUS") {
        return {
            ...state,
            status: action.status,
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
        apiFunctions.getStatus(id)
            .then((data) => {
                //if (id !== 29272) {
                dispatch(loadProfileStatus(data.data))
                //}else{
                //    dispatch(loadProfileStatus(initialState.status))
                //}
            });
    }
}

export const putStatus = (status) => {
    return (dispatch) => {
        apiFunctions.putStatus(status)
        .then((response)=>{
            if(response === 0){
                dispatch(putProfileStatus(status))
            }
        })
    }
}

export default ProfilePageReducer;