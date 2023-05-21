import { renderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 10 },
            { text: "Информационные технологии (от англ. IT, Information technology) — это использование компьютерных систем или устройств для передачи информации. Такими технологиями пользуются не только работники IT-сферы, но и все люди на планете — от CEO в корпорациях до продавцов на индийских рынках.", likes: 13 },
            { text: "Человек ежедневно взаимодействует с IT-сферой: хранит, отправляет и скачивает информацию. Мама троих детей, которая добавляет в заметки на iPhone список новогодних подарков, тоже использует информационные технологии.", likes: 20 },
            { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor? Iste, itaque tempora esse cupiditate ea architecto deserunt quaerat. Culpa.", likes: 12 },
            { text: "What? How can i do this?", likes: 100 },
            { text: "Hey! I did that!!)))", likes: 500 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Vlados" },
            { id: 2, name: "Alex" },
            { id: 3, name: "Viktor" },
            { id: 4, name: "Vlados" },
            { id: 5, name: "Alex" },
            { id: 6, name: "Viktor" },
            { id: 7, name: "Vlados" },
            { id: 8, name: "Alex" },
            { id: 9, name: "Viktor" },
            { id: 10, name: "Vlados" },
            { id: 11, name: "Alex" },
            { id: 12, name: "Viktor" },
            { id: 13, name: "Viktor" },
            { id: 14, name: "Vlados" },
            { id: 15, name: "Alex" },
            { id: 16, name: "Viktor" },
            { id: 17, name: "Vlados" },
            { id: 18, name: "Alex" },
            { id: 19, name: "Viktor" },
            { id: 20, name: "Vlados" },
            { id: 21, name: "Alex" },
            { id: 22, name: "Viktor" },
        ],
        messages: [
            { name: "Vlados", message: "Lorem ipsum dolor sit,sicing elit. Possimus quia hic, quisquam, corporis tempore laborum enim, perspiciatis maxime magnam fuga aperiam? Mollitia quibusdam, provid amet consectetur adipisicing elit. Voluptates minima ea sequi dignissimos blanditiis voluptate eveniet dolorem distinctio rem atque?" },
            { name: "Me", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi." },
            { name: "Vlados", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati id fuga officiis doloremque?" },
            { name: "Me", message: "Hey, does it works???))))" },
            { name: "Vlados", message: "Lorem ipsum dolor sit,sicing elit. Possimus quia hic, quisquam, corporis tempore laborum enim, perspiciatis maxime magnam fuga aperiam? Mollitia quibusdam, provid amet consectetur adipisicing elit. Voluptates minima ea sequi dignissimos blanditiis voluptate eveniet dolorem distinctio rem atque?" },
            { name: "Me", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi." },
            { name: "Vlados", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati id fuga officiis doloremque?" },
            { name: "Me", message: "Hey, does it works???))))" },
        ]
    },
    sidebar: {
        friends: [
            {name: "Vlados" },
            {name: "Alex" },
            {name: "Viktor" },
        ]
    }
};

export let AddPost = (PostMessage) => {
    let NewPost = {
        text: PostMessage,
        likes: 1,
    };
    state.profilePage.posts.push(NewPost);
    renderEntireTree(state);
}

export default state;