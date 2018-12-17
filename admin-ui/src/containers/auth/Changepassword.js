import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import InputField from '../../components/InputField'


class Changepassword extends React.Component {

    constructor(props) {
        super(props);
    }

    submit(values) {
        this.props.changePassword(values);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>

                    <Field
                        name="currentPassword"
                        id="current-password"
                        label="Current Password"
                        component={InputField}
                        type="password" />

                    <Field
                        name="newPassword"
                        id="new-password"
                        label="New Password"
                        component={InputField}
                        type="password" />

                    <Field
                        name="passwordConfirm"
                        id="confirm-password"
                        label="Confirm Password"
                        component={InputField}
                        type="password" />

                    <div className="text-center">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>

            </form>
        )
    }
    
}


function validate(values) {
    const errors = {};

    if(!values.currentPassword) {
        errors.currentPassword = 'Please, enter your current password!';
    }

    if(!values.newPassword) {
        errors.newPassword = 'Please, enter new password!';
    }

    if(!values.passwordConfirm) {
        errors.passwordConfirm = 'Password must be confirmed!';
    }

    if(values.newPassword !== values.passwordConfirm) {
        errors.newPassword = 'Passwords must match!';
    }

    if(values.newPassword && values.newPassword.length < 6) {
        errors.newPassword = 'Password must be at least 6 characters long!';
    }
    
    return errors;
}



export default connect(null, actions)(reduxForm({
    form: 'passwords',
    validate
}, null, actions)(Changepassword));