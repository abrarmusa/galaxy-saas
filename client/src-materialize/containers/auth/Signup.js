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
            <h1 className="center-align">Sign Up</h1>
            <form className="col s12" onSubmit={handleSubmit(this.submit.bind(this))}>
                
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


                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <button type="submit" className="blue-grey darken-3 btn-large">Sign up</button>
                    </div>
                </div>

            </form>

            <div className="row">
                <div className="col s6 offset-s3 center-align">
                    <Link to="/signin">Already have an account? Go ahead and sign in!</Link>
                </div>
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