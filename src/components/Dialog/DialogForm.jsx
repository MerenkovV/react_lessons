import React from 'react'
import { Field, reduxForm } from 'redux-form'

class DialogForm extends React.Component {

    onAddMess = (data) => {
        this.props.AddMess(data.text);
        this.props.reset()
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onAddMess)} className="main__write">
                <Field component={'textarea'} name="text" id="" cols="30" rows="10"></Field>
                <button>Send</button>
            </form>
        )
    }
}

export const DialogFormContainer = reduxForm({ form: 'message' })(DialogForm)