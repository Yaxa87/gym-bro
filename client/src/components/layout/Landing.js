import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">GymBro</h1>
                                <p className="lead">Quick and easy way to track your gym workouts.</p>
                                <hr />
                                <Link to="/register" className="btn btn-lg btn-success mr-2">Sign Up</Link>
                                <Link to="/login" className="btn btn-lg btn-primary">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;