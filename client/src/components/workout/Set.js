import React from 'react';
import PropTypes from "prop-types";
import TextInputGroup from '../common/TextInputGroup';

const Set = ({
    excercise,
    setNumber,
    onChange,
    weight,
    reps,
    onRemoveSet
}) => {
    return (
        <div className="form-row">
            <div className="col-2">
                <div className="form-control no-border">#{setNumber}</div>
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
                <span className="form-control text-center no-border" onClick={(e) => onRemoveSet(excercise, setNumber)}>
                    <i className="fas fa-times"></i>
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
    onRemoveSet: PropTypes.func.isRequired
}

export default Set;