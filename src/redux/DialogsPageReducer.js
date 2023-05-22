let initialState = {
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
};

export const AddMessageActionCreator = (Text) => {
    return(
      {
        type: "ADD-MESSAGE",
        DialogMessage: Text,
      }
    )
};

const DialogsPageReducer = (state = initialState, action) => {

    if (action.type === "ADD-MESSAGE") {
        return {
          ...state,
          messages: [...state.messages, {name: "Me", message: action.DialogMessage}]
        }
    }
    return state;
};

export default DialogsPageReducer;