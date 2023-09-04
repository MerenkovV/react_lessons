import React from 'react';
import { SendMes, loadUserProfile } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';

class ProfileClass extends React.Component{

    componentDidMount() {
        if(this.props.id !== 29272){
            this.props.loadUserProfile(this.props.id)
        }else{
            this.props.loadUserProfile(null)
        }
    }

    render(){
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info,
        posts: state.profilePage.posts,
        id: state.profilePage.id,
        isFetching: state.profilePage.isFetching
    }
};

const ProfileContainer = connect(mapStateToProps, {SendMes, loadUserProfile})(ProfileClass);

export default ProfileContainer;
