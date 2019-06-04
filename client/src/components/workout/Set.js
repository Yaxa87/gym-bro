import React from 'react';
import PropTypes from "prop-types";
import TextInputGroup from '../common/TextInputGroup';

const Set = ({
    excercise,
    setNumber,
    onChange,
    weight,
    reps,
    removeSet
}) => {
    return (
        <div className="form-row">
            <div className="col-2">
                <input value={setNumber} className="form-control form-control-md" disabled></input>
            </div>
            <div className="col-4">
                <TextInputGroup 
                    name="weight"
                    type="number"
                    placeholder="weight"
                    onChange={(e) => onChange(e, excercise, setNumber)}
                    value={weight}
                />
            </div>
            <div className="col-4">
                <TextInputGroup 
                    name="reps"
                    type="number"
                    placeholder="reps"
                    onChange={(e) => onChange(e, excercise, setNumber)}
                    value={reps}
                />
            </div>
            <div className="col-2">
                <span className="form-control text-center" onClick={(e) => removeSet(excercise, setNumber)}>
                    <i className="fas fa-trash-alt"></i>
                </span>
            </div>
        </div>
    )
}

History.propTypes = {
    excercise: PropTypes.object.isRequired,
    setNumber: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    reps: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    removeSet: PropTypes.func.isRequired
}

export default Set;