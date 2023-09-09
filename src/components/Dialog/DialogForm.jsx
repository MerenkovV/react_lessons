import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextareaWithErr from '../../commons/TextareaWithErr'
import {maxSymbolsCreator, requiredField} from '../../utils/validator'

const max50symbols = maxSymbolsCreator(50)

class DialogForm extends React.Component {
    onAddMess = (data) => {
        this.props.AddMess(data.text)
        this.props.reset()
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onAddMess)} className="main__write">
                <Field component={TextareaWithErr} tag={"textarea"} name="text" cols="30" rows="10" validate={[requiredField, max50symbols]}/>
                <button>Send</button>
            </form>
        )
    }
}

export const DialogFormContainer = reduxForm({ form: 'message' })(DialogForm)