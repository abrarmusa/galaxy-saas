import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';
import InputField from '../../components/InputField';


class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    submit(values) {
        this.props.signupUser(values, this);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="container">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                
                    <Field 
                        name="username"
                        id="username"
                        label="Username"
                        component={InputField}
                        type="text" />

                    <Field 
                        name="email"
                        id="email"
                        label="Email"
                        component={InputField}
                        type="email" />

                    <Field 
                        name="password"
                        id="password"
                        label="Password"
                        component={InputField}
                        type="password" />

                    <Field 
                        name="passwordConfirm"
                        id="passwordConfirm"
                        label="Confirm Password"
                        component={InputField}
                        type="password" />


                    <div className="text-center">
                        <button type="submit" className="btn btn-default">Sign up</button>
                    </div>

            </form>

                <div className="text-center">
                    <Link to="/signin">Already have an account? Go ahead and sign in!</Link>
                </div>

            </div>
        )
    }
}



function validate(values) {
    const errors = {};

    if(!values.username) {
        errors.username = 'Please, enter a username!'
    }

    if(!values.email) {
        errors.email = 'Please, enter an email!';
    }

    if(!values.password) {
        errors.password = 'Please, enter a password!';
    }

    if(values.password && values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long!'
    }

    if(!values.passwordConfirm) {
        errors.passwordConfirm = 'Password must be confirmed!';
    }

    if(values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match!';
    }
    
    return errors;
}



export default connect(null, actions)(reduxForm({
    form: 'signup',
    validate
}, null, actions)(Signup));