
const ProfilePageReducer = (action, state) => {
    if (action.type === "ADD-POST") {
        let NewPost = {
            text: action.PostMessage,
            likes: 1,
        };
        state.profilePage.posts.push(NewPost);
    }

    return state;
};

export default ProfilePageReducer;