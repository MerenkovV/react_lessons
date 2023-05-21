
const DialogsPageReducer = (action, state) => {
    if (action.type === "ADD-MESSAGE") {
        let NewMessage = {
            name: "Me",
            message: action.DialogMessage,
        };
        state.dialogsPage.messages.push(NewMessage);
    }

    return state;
};

export default DialogsPageReducer;