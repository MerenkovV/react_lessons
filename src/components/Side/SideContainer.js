import React from 'react';
import Side from './Side';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
};

const SideContainer = connect(mapStateToProps)(Side);

export default SideContainer;
