import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="navigation-item">
                <Link className="navigation-link" to="/history">
                    <i className="fas fa-history d-block text-center"></i>
                    HISTORY
                </Link>
            </div>
            <div className="navigation-item">
                <Link className="navigation-link" to="/workout">
                    <i className="fas fa-dumbbell d-block text-center"></i>
                    WORKOUT
                </Link>
            </div>
            <div className="navigation-item">
                <Link className="navigation-link" to="/user">
                    <i className="fas fa-user d-block text-center"></i>
                    USER
                </Link>
            </div>            
        </nav>
    )
}

export default Navbar;