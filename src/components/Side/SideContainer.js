import Side from './Side';
import { connect } from 'react-redux';
import {loadUserProfile} from '../../redux/ProfilePageReducer'

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
};

const SideContainer = connect(mapStateToProps, {loadUserProfile})(Side);

export default SideContainer;
