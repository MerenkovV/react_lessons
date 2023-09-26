const ADD_MESSAGE:string = "DIALOGS/ADD-MESSAGE"

type stateType = {
  dialogs: Array<{
    id: number
    name: string
  }>
  messages: Array<{
    name: string
    message: string
  }>
}

type AddMessType = {
  type: typeof ADD_MESSAGE, 
  DialogMessage: string
}

let initialState:stateType = {
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

export const AddMess = (Text: string):AddMessType => {
    return(
      {
        type: ADD_MESSAGE,
        DialogMessage: Text,
      }
    )
};

const DialogsPageReducer = (state:stateType = initialState, action:AddMessType):stateType => {
    if (action.type === ADD_MESSAGE) {
        return {
          ...state,
          messages: [...state.messages, {name: "Me", message: action.DialogMessage}]
        }
    }
    return state;
};

export default DialogsPageReducer;