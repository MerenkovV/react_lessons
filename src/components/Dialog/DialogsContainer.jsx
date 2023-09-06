import Dialogs from './Dialogs'
import { AddMess } from '../../redux/DialogsPageReducer'
import { connect } from 'react-redux'
import { withAuth } from '../../hoc/withAuth';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return{
    page: state.dialogsPage,
  }
};

export default compose(
  connect(mapStateToProps, {AddMess}),
  withAuth,
)(Dialogs);
