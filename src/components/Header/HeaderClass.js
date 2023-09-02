import React from 'react'
import axios from "axios";
import Header from "./Header";
import { connect } from 'react-redux';
import {SetUserData} from '../../redux/authReducer'

class HeaderClass extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((info) => {
                let userData = {
                    id: info.data.data.id,
                    login: info.data.data.login,
                    email: info.data.data.email,
                    isAuthorized: true
                }
                this.props.SetUserData(userData)
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized,
    }
}

const HeaderContainer = connect(mapStateToProps, {SetUserData})(HeaderClass);

export default HeaderContainer;