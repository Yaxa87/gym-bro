import React from 'react';
import PropTypes from "prop-types";

const ExcerciseList = ({
    handleSelectExcercise
}) => {
    return (
        <div>
            <h2 className="text-center">Chest</h2>
            <button type="button" className="btn btn-light btn-block" value="Barbell Bench Press" onClick={handleSelectExcercise}>Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Bench Press" onClick={handleSelectExcercise}>Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Incline Barbell Bench Press" onClick={handleSelectExcercise}>Incline Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Incline Dumbell Bench Press" onClick={handleSelectExcercise}>Incline Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Decline Barbell Bench Press" onClick={handleSelectExcercise}>Decline Barbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Decline Dumbell Bench Press" onClick={handleSelectExcercise}>Decline Dumbell Bench Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Flyes" onClick={handleSelectExcercise}>Dumbell Flyes</button>
            <button type="button" className="btn btn-light btn-block" value="Machine Flyes" onClick={handleSelectExcercise}>Machine Flyes</button>
            <button type="button" className="btn btn-light btn-block" value="Cable Cross Over" onClick={handleSelectExcercise}>Cable Cross Over</button>
            <button type="button" className="btn btn-light btn-block" value="Dips" onClick={handleSelectExcercise}>Dips</button>

            <h2 className="text-center">Shoulders</h2>
            <button type="button" className="btn btn-light btn-block" value="Barbell Seated Military Press" onClick={handleSelectExcercise}>Barbell Seated Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Seated Military Press" onClick={handleSelectExcercise}>Dumbell Seated Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Standing Military Press" onClick={handleSelectExcercise}>Barbell Standing Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Side Lateral Raises" onClick={handleSelectExcercise}>Dumbell Side Lateral Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Front Lateral Raises" onClick={handleSelectExcercise}>Dumbell Front Lateral Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Rear Delt Raises" onClick={handleSelectExcercise}>Dumbell Rear Delt Raises</button>
            <button type="button" className="btn btn-light btn-block" value="Machine Military Press" onClick={handleSelectExcercise}>Machine Military Press</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Up Right Row" onClick={handleSelectExcercise}>Barbell Up Right Row</button>


            <h2 className="text-center">Back</h2>
            <button type="button" className="btn btn-light btn-block" value="Deadlift" onClick={handleSelectExcercise}>Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Bent-Over Row" onClick={handleSelectExcercise}>Barbell Bent-Over Row</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Single Arm Row" onClick={handleSelectExcercise}>Dumbell Single Arm Row</button>
            <button type="button" className="btn btn-light btn-block" value="Pull Up" onClick={handleSelectExcercise}>Pull Up</button>
            <button type="button" className="btn btn-light btn-block" value="Lat Pull Downs" onClick={handleSelectExcercise}>Lat Pull Downs</button>
            <button type="button" className="btn btn-light btn-block" value="" onClick={handleSelectExcercise}>Seated Cable Row</button>

            <h2 className="text-center">Arms</h2>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Curl" onClick={handleSelectExcercise}>Dumbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Barbell Curl" onClick={handleSelectExcercise}>Barbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Reverse Grip Barbell Curl" onClick={handleSelectExcercise}>Reverse Grip Barbell Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Preacher Curl" onClick={handleSelectExcercise}>Preacher Curl</button>
            <button type="button" className="btn btn-light btn-block" value="Bench Tricep Extension" onClick={handleSelectExcercise}>Bench Tricep Extension</button>
            <button type="button" className="btn btn-light btn-block" value="Seated Dumbell Tricep Extension" onClick={handleSelectExcercise}>Seated Dumbell Tricep Extension</button>
            <button type="button" className="btn btn-light btn-block" value="Tricep Cable Pushdown" onClick={handleSelectExcercise}>Tricep Cable Pushdown</button>
            <button type="button" className="btn btn-light btn-block" value="Narrow Grip Barbell Bench Press" onClick={handleSelectExcercise}>Narrow Grip Barbell Bench Press</button>

            <h2 className="text-center">Legs</h2>
            <button type="button" className="btn btn-light btn-block" value="Squat" onClick={handleSelectExcercise}>Squat</button>
            <button type="button" className="btn btn-light btn-block" value="Hack Squat" onClick={handleSelectExcercise}>Hack Squat</button>
            <button type="button" className="btn btn-light btn-block" value="Deadlift" onClick={handleSelectExcercise}>Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Straight Leg Deadlift" onClick={handleSelectExcercise}>Romanian Deadlift</button>
            <button type="button" className="btn btn-light btn-block" value="Leg Press" onClick={handleSelectExcercise}>Leg Press</button>
            <button type="button" className="btn btn-light btn-block" value="Dumbell Lunge" onClick={handleSelectExcercise}>Dumbell Lunge</button>
            <button type="button" className="btn btn-light btn-block" value="Lying Leg Curls" onClick={handleSelectExcercise}>Lying Leg Curls</button>
            <button type="button" className="btn btn-light btn-block" value="Calf Raises" onClick={handleSelectExcercise}>Calf Raises</button>

            <h2 className="text-center">Misc.</h2>
        </div>
    )
}

ExcerciseList.propTypes = {
    handleSelectExcercise: PropTypes.func.isRequired
}

export default ExcerciseList;
