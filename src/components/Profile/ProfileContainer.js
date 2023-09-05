import React from 'react';
import { SendMes, loadUserProfile } from '../../redux/ProfilePageReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withAuth} from '../../hoc/withAuth';

class ProfileClass extends React.Component{

    componentDidMount() {
            this.props.loadUserProfile(this.props.profile.id)
    }

    render(){
        return <Profile {...this.props}/>
    }
}

let ProfileWithAuth = withAuth(ProfileClass)

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
    }
};

const ProfileContainer = connect(mapStateToProps, {SendMes, loadUserProfile})
(connect(mapStateToPropsForRedirect)(ProfileWithAuth));

export default ProfileContainer;
