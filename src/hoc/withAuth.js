import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
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
        if (!props.isAuthorized) return <Navigate to={'/login'} />
        return <Component {...props} />
    }

    let RedirectComponentWithConnect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return RedirectComponentWithConnect;
}