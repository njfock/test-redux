import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class UserForm extends Component {
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Field name="name" component="input"/>
                <Field name="lastname" component="input"/>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'user'
})(userForm)