import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';


class Header extends React.Component {

    handleClick() {
        this.props.signoutUser();
    }

    toggleMenu() {
        document.getElementById('nav-menu').classList.toggle('is-active');
    }

    renderLinks() {
        if(this.props.authenticated) {
            return [
            <Link key={1} className="navbar-item" to="settings"><span className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></span>Settings</Link>,
            <a key={2} className="navbar-item" key={3} onClick={this.handleClick.bind(this)}><i className="fa fa-sign-out" aria-hidden="true"></i>Sign Out</a>
            ]
            } else {
            return [
            <Link key={3} className="navbar-item" to="/signup"><span className="icon"><i className="fa fa-user-plus" aria-hidden="true"></i></span> Sign Up</Link>,
            <Link key={4} to="/signin" className="navbar-item"><span className="icon"><i className="fa fa-sign-in" aria-hidden="true"></i></span> Sign In</Link>
            ]
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">MERN Starter</Link >

                    <div className="navbar-burger burger" data-target="nav-menu" onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="nav-menu" className="navbar-menu">
                    <div className="navbar-start is-hidden-desktop">
                        <Link className="navbar-item" to="/about"><span className="icon"><i className="fa fa-info-circle" aria-hidden="true"></i></span>About</Link>
                        {this.renderLinks()}
                    </div>
                </div>

                <div className="navbar-end is-hidden-mobile">
                    <Link className="navbar-item" to="/about"><span className="icon"><i className="fa fa-info-circle" aria-hidden="true"></i></span>About</Link>

                    {this.renderLinks()}
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
