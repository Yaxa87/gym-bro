import React from 'react';
import PropTypes from 'prop-types';

const HeadBar = ({pageTitle}) => {
    return (
        <div className="head-bar">
            <span className="logo">GymBro</span>
            <h1>{pageTitle}</h1>
        </div>
    )
}

HeadBar.propTypes = {
    pageTitle: PropTypes.string.isRequired
}

export default HeadBar;
