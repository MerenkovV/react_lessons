import React from 'react'
import Header from "./Header";
import { connect } from 'react-redux';
import {SetUserData} from '../../redux/authReducer'
import { apiFunctions } from '../../api/api';

class HeaderClass extends React.Component {

    componentDidMount() {
        apiFunctions.getAuth()
            .then((data) => {
                let userData = {
                    id: data.id,
                    login: data.login,
                    email: data.email,
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