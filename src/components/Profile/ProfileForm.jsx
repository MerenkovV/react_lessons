import React from 'react'
import { Field, reduxForm } from 'redux-form'

export class ProfileForm extends React.Component {

    onSubmit = (data) => {
        this.props.SendMes(data.text);
        this.props.reset()
    };

  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name={'text'} component={'textarea'} placeholder='Your news...' type="text" className="main__input" />
            <button className="main__button">Send</button>
        </form>
    )
  }
}

export let ProfileFormContainer = reduxForm({form: 'news', enableReinitialize: true})(ProfileForm)
