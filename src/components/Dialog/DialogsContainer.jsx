
import Dialogs from './Dialogs'
import { AddMessageActionCreator } from '../../redux/DialogsPageReducer'
import { connect } from 'react-redux'


let mapDispatchToProps = (dispatch) => {
  return{
    AddMess: (Text) => {
      dispatch(AddMessageActionCreator(Text))
    }
  }
};

let mapStateToProps = (state) => {
  return{
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
