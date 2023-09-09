import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {maxSymbolsCreator, requiredField} from '../../utils/validator'
import TextareaWithErr from '../../commons/TextareaWithErr';

let max100symbols = maxSymbolsCreator(100)

export class ProfileForm extends React.Component {

    onSubmit = (data) => {
      this.props.SendMes(data.text)
      this.props.reset()
    };

  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field className="main__input" name={'text'} component={TextareaWithErr} placeholder='Your news...' tag={"textarea"} validate={[requiredField, max100symbols]}/>
            <button className="main__button">Send</button>
        </form>
    )
  }
}

export let ProfileFormContainer = reduxForm({form: 'news', enableReinitialize: true})(ProfileForm)
