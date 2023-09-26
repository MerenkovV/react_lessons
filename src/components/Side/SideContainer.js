import Side from './Side';
import { connect } from 'react-redux';
import {loadUserProfile, ChangeId} from '../../redux/ProfilePageReducer.ts'

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
};

const SideContainer = connect(mapStateToProps, {loadUserProfile, ChangeId})(Side);

export default SideContainer;
