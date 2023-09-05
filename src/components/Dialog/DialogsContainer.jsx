import Dialogs from './Dialogs'
import { AddMess } from '../../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { withAuth } from '../../hoc/withAuth';

let mapStateToPropsAuth = (state) => {
  return{
    isAuthorized: state.auth.isAuthorized
  }
};

let mapStateToProps = (state) => {
  return{
    page: state.dialogsPage,
  }
};

const DialogsContainer = connect(mapStateToProps, {AddMess})
(connect(mapStateToPropsAuth)(withAuth(Dialogs)));

export default DialogsContainer;
