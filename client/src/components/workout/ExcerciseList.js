import React from 'react';
import PropTypes from "prop-types";

const ExcerciseList = ({
    onClick
}) => {
    return (
        <div>
            <h2 className="text-center">Choose excercise:</h2>
            <ul>
                <button type="button" value="aaa" onClick={onClick}>Excercise 1</button>
                <button type="button" value="bbb" onClick={onClick}>Excercise 2</button>
                <button type="button" value="ccc" onClick={onClick}>Excercise 3</button>
                <button type="button" value="ddd" onClick={onClick}>Excercise 4</button>
                <button type="button" value="eee" onClick={onClick}>Excercise 5</button>
                <button type="button" value="fff" onClick={onClick}>Excercise 6</button>
            </ul>
        </div>
    )
}

ExcerciseList.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ExcerciseList;
