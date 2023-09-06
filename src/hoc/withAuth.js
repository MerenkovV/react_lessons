import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth
    }
};

export const withAuth = (Component) => {
    /*
    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuthorized) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    } //Можно сделать классом или функцией
    */ 

    let RedirectComponent = (props) => {
        if (!props.auth.isAuthorized && props.auth.userId !== 1) {
            return <Navigate to={'/login'} />
        }else if(props.auth.userId !== 1){
            return <Component {...props} />
        }
    }

    let RedirectComponentWithConnect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return RedirectComponentWithConnect;
}