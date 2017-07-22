import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import InputField from '../../components/InputField';


class Signin extends React.Component {
    constructor(props) {
        super(props);
    }

    submit({email, password}) {
        this.props.signinUser({email, password}, this);
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="container">
            <h1 className="center-align">Sign In</h1>
            <form className="col s12" onSubmit={handleSubmit(this.submit.bind(this))}>
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
                

                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <button type="submit" className="blue-grey darken-3 btn-large">Sign In</button>
                    </div>
                </div>

            </form>

            <div className="row">
                <div className="col s6 offset-s3 center-align">
                    <Link to="/signup">If you dont have account, feel free to create one!</Link>
                </div>
            </div>

            </div>
        )
    }
    
}

function validate(values) {
    const errors = {};

    if(!values.email) {
        errors.email = 'Please, enter an email!';
    }

    if(!values.password) {
        errors.password = 'Please, enter a password!';
    }

    return errors;
}




export default connect(null, actions)(reduxForm({
    form: 'signin',
    validate
})(Signin));