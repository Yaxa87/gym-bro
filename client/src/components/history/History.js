import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';
import HeadBar from '../common/HeadBar';

class History extends Component {
    state = {
        workoutHistory: []
    }

    componentDidMount() {
        // Redirect to login page if not authenticated
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login')
        }

        this.props.getWorkouts();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({workoutHistory: nextProps.workoutHistory.workouts});
    }

    renderHistoryTable() {
        return (
            this.state.workoutHistory.map((workout, index) => 
                <div className="text-center mb-4" key={index}>
                    <h2 className="h5 blue-title">{workout.name} <small>{workout.date.slice(0, 10)}</small></h2>
                    {workout.excercises.map((excercise, index) => 
                        <div key={index}>
                            <h3 className="text-left h6 font-weight-bold">{excercise.name}</h3>
                            <table className="table excercise-container">
                                <thead>
                                    <tr>
                                        <th scope="col">Set</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Reps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {excercise.sets.map((set, index) => 
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{set.weight}{excercise.weightUnit === "no" ? "" : excercise.weightUnit}</td>
                                            <td>{set.reps}</td>
                                        </tr>    
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )
        )
    }

    render() {
        return (
            <div>
                <HeadBar pageTitle="Workout History" />
                {this.renderHistoryTable()}
            </div>
        )
    }
}

History.propTypes = {
    getWorkouts: PropTypes.func.isRequired,
    workoutHistory: PropTypes.object,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    workoutHistory: state.workoutHistory,
    auth: state.auth
});

export default connect(mapStateToProps, { getWorkouts })(History);