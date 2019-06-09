import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import HeadBar from '../common/HeadBar';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        const authNav = (
            <div className="">
                <a href="# " className="nav-item nav-link" onClick={this.onLogoutClick.bind(this)}>Logout</a>
            </div>
        );

        const guestNav = (
            <div className="">
                <Link className="nav-item nav-link" to="/register">Sign Up</Link>
                <Link className="nav-item nav-link" to="/login">Login</Link>
            </div>
        );

        return (
            <div>
                <HeadBar pageTitle="Profile" />
                <div className="container">
                    {isAuthenticated ? authNav : guestNav}
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);