import React from 'react';
import Side from './Side';
import { connect } from 'react-redux';
import {ChangeId} from '../../redux/ProfilePageReducer'

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
};

const SideContainer = connect(mapStateToProps, {ChangeId})(Side);

export default SideContainer;
