import React from 'react';
import { AddPostActionCreator } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        SendMes: (text) => {
            dispatch(AddPostActionCreator(text));
        }
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
