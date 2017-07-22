import axios from 'axios';
import {AUTH_USER, UNAUTH_USER} from './types';

import  {ROOT_URL} from '../../config';



//=======================================
// USERS ACTIONS
//=======================================

// handling logging in
export function signinUser({email, password}, context) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
            dispatch({type: AUTH_USER});
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('info', JSON.stringify(response.data.info));
            context.props.history.push('/');
            alertify.success('Welcome back!');
        })
        .catch(() => {
            alertify.error('Signing in failed!!!');
        })
    }
}


// handling signing up - creating a new user
export function signupUser({username, email, password}, context) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, {username, email, password})
        .then(response => {
            dispatch({type: AUTH_USER});
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            context.props.history.push('/');
            alertify.success('Welcome!');
        })
        .catch(response => {
            alertify.error(response.response.data.error);
        })
    }
}




// handling logging out
export function signoutUser() {
    return (dispatch) => {
        alertify.confirm('Are you sure you want to sign out?', function() {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('info');
            dispatch({type: UNAUTH_USER});
            alertify.success('You have successfully signed out!');
        }, function() {
            alertify.error('Signing out canceled!');
        })
        
    }
}

// changing password
export function changePassword({currentPassword, newPassword}) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/changepassword`, {currentPassword, newPassword}, {headers: {
            authorization: localStorage.getItem('token')
        }})
        .then((response) => {
            alertify.success(response.data.message);
        })
        .catch(err => alertify.error(err.response.data.error))
    }
}


// editing users info
export function editInfo(values) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/editinfo`, values, {headers: {
            authorization: localStorage.getItem('token')
        }})
        .then((response) => {
            localStorage.setItem('info', JSON.stringify(response.data.info));
            alertify.success('Updated!');
        })
    }
}