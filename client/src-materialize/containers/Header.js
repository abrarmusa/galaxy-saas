import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';


class Header extends React.Component {

    handleClick() {
        console.log('sign out')
        this.props.signoutUser();
    }

    renderLinks() {
        if(this.props.authenticated) {
            return [
            <li key={4}><Link to="settings">Settings</Link></li>,
            <li key={3} onClick={this.handleClick.bind(this)}><a>Sign Out</a></li>
            ]
            } else {
            return [
            <li key={1}><Link to="/signup">Sign Up</Link></li>,
            <li key={2}><Link to="/signin">Sign In</Link> </li>
            ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-3">
                <Link to="/" className="brand-logo left">MERN Starter</Link >
                <ul id="nav-mobile" className="right">
                    <li key={4}><Link to="/about">About</Link></li>
                    {this.renderLinks()}
                </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);
