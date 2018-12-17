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
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">MERN Starter</Link >
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    
                    <ul className="nav navbar-nav navbar-right">
                        <li key={4}><Link to="/about">About</Link></li>
                        {this.renderLinks()}
                    </ul>
                    </div>
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
