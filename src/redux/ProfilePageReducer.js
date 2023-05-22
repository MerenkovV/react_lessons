let initialState = {
    posts: [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 10 },
        { text: "Информационные технологии (от англ. IT, Information technology) — это использование компьютерных систем или устройств для передачи информации. Такими технологиями пользуются не только работники IT-сферы, но и все люди на планете — от CEO в корпорациях до продавцов на индийских рынках.", likes: 13 },
        { text: "Человек ежедневно взаимодействует с IT-сферой: хранит, отправляет и скачивает информацию. Мама троих детей, которая добавляет в заметки на iPhone список новогодних подарков, тоже использует информационные технологии.", likes: 20 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 12 },
        { text: "What? How can i do this?", likes: 100 },
        { text: "Hey! I did that!!)))", likes: 500 },
    ],
};

export const AddPostActionCreator = (text) => {
    return(
        {
            type: "ADD-POST",
            PostMessage: text,
        }
    )
};
const ProfilePageReducer = (state = initialState, action) => {
    if (action.type === "ADD-POST") {
        let NewPost = {
            text: action.PostMessage,
            likes: 1,
        };
        state.posts.push(NewPost);
    }

    return state;
};

export default ProfilePageReducer;