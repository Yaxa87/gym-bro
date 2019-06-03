import React from 'react';
import PropTypes from "prop-types";

const ExcerciseList = ({
    onClick
}) => {
    return (
        <div>
            <h2 className="text-center">Chest</h2>
            <button type="button" className="btn btn-light btn-block" value="Barbell Bench Press" onClick={onClick}>Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Bench Press" onClick={onClick}>Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Incline Barbell Bench Press" onClick={onClick}>Incline Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Incline Dumbell Bench Press" onClick={onClick}>Incline Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Decline Barbell Bench Press" onClick={onClick}>Decline Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Decline Dumbell Bench Press" onClick={onClick}>Decline Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Flyes" onClick={onClick}>Dumbell Flyes</button>
            <button type="button" className="btn btn-light btn-block" value="Machine Flyes" onClick={onClick}>Machine Flyes</button>
            <button type="button" className="btn btn-light btn-block" value="Cable Cross Over" onClick={onClick}>Cable Cross Over</button>
            <button type="button" className="btn btn-light btn-block" value="Dips" onClick={onClick}>Dips</button>

            <h2 className="text-center">Shoulders</h2>
            <button type="button" className="btn btn-light btn-block" value="Barbell Seated Military Press" onClick={onClick}>Barbell Seated Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Seated Military Press" onClick={onClick}>Dumbell Seated Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Standing Military Press" onClick={onClick}>Barbell Standing Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Side Lateral Raises" onClick={onClick}>Dumbell Side Lateral Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Front Lateral Raises" onClick={onClick}>Dumbell Front Lateral Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Rear Delt Raises" onClick={onClick}>Dumbell Rear Delt Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Machine Military Press" onClick={onClick}>Machine Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Up Right Row" onClick={onClick}>Barbell Up Right Row</button>


            <h2 className="text-center">Back</h2>
            <button type="button" className="btn btn-light btn-block" value="Deadlift" onClick={onClick}>Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Bent-Over Row" onClick={onClick}>Barbell Bent-Over Row</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Single Arm Row" onClick={onClick}>Dumbell Single Arm Row</button>
            <button type="button" className="btn btn-light btn-block" value="Pull Up" onClick={onClick}>Pull Up</button>
            <button type="button" className="btn btn-light btn-block" value="Lat Pull Downs" onClick={onClick}>Lat Pull Downs</button>
            <button type="button" className="btn btn-light btn-block" value="" onClick={onClick}>Seated Cable Row</button>

            <h2 className="text-center">Arms</h2>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Curl" onClick={onClick}>Dumbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Curl" onClick={onClick}>Barbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Reverse Grip Barbell Curl" onClick={onClick}>Reverse Grip Barbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Preacher Curl" onClick={onClick}>Preacher Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Bench Tricep Extension" onClick={onClick}>Bench Tricep Extension</button>
            <button type="button" className="btn btn-light btn-block" value="Seated Dumbell Tricep Extension" onClick={onClick}>Seated Dumbell Tricep Extension</button>
            <button type="button" className="btn btn-light btn-block" value="Tricep Cable Pushdown" onClick={onClick}>Tricep Cable Pushdown</button>
            <button type="button" className="btn btn-light btn-block" value="Narrow Grip Barbell Bench Press" onClick={onClick}>Narrow Grip Barbell Bench Press</button>

            <h2 className="text-center">Legs</h2>
            <button type="button" className="btn btn-light btn-block" value="Squat" onClick={onClick}>Squat</button>
            <button type="button" className="btn btn-light btn-block" value="Hack Squat" onClick={onClick}>Hack Squat</button>
            <button type="button" className="btn btn-light btn-block" value="Deadlift" onClick={onClick}>Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Straight Leg Deadlift" onClick={onClick}>Romanian Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Leg Press" onClick={onClick}>Leg Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Lunge" onClick={onClick}>Dumbell Lunge</button>
            <button type="button" className="btn btn-light btn-block" value="Lying Leg Curls" onClick={onClick}>Lying Leg Curls</button>
            <button type="button" className="btn btn-light btn-block" value="Calf Raises" onClick={onClick}>Calf Raises</button>

            <h2 className="text-center">Misc.</h2>
        </div>
    )
}

ExcerciseList.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ExcerciseList;
