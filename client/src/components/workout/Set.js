import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextInputGroup from '../common/TextInputGroup';

const Set = ({
    excercise,
    setNumber,
    onChange,
    weight,
    reps
}) => {
    return (
        <div className="form-row">
            <div className="col-2">
                <input value={setNumber} className="form-control form-control-md" disabled></input>
            </div>
            <div className="col-5">
                <TextInputGroup 
                    name="weight"
                    placeholder="weight"
                    onChange={(e) => onChange(e, excercise, setNumber)}
                    value={weight}
                />
            </div>
            <div className="col-5">
                <TextInputGroup 
                    name="reps"
                    placeholder="reps"
                    onChange={(e) => onChange(e, excercise, setNumber)}
                    value={reps}
                />
            </div>
        </div>
    )
}

History.propTypes = {
    excercise: PropTypes.object.isRequired,
    setNumber: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    reps: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired
}

export default Set;