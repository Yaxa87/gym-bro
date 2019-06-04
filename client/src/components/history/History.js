import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

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
            this.state.workoutHistory.map((item, index) => 
                <div className="text-center" key={index}>
                    <h3>{item.name}</h3>
                    {item.excercises.map((excercise, index) => 
                        <div key={index}>
                            <h5 className="text-left">{excercise.name}</h5>
                            <table className="table">
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
                <h1 className="display-4 text-center">Workout History</h1>
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