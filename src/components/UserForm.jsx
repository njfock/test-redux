import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'Campo obligatorio'
    }
    if(!values.lastname){
        errors.lastname = 'Campo obligratorio'
    }
    return errors
}

class UserForm extends Component {
    render(){
        const { handleSubmit } = this.props
        console.log(this.props)
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
    form: 'user',
    validate,
})(UserForm)