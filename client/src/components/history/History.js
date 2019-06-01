import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

class History extends Component {
    constructor() {
        super();
        this.state = {
            workoutHistory: []
        }
    }

    componentDidMount() {
        // Redirect to login page if not authenticated
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login')
        }

        this.props.getWorkouts();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        this.setState({workoutHistory: nextProps.workoutHistory.workouts});
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Workout History</h1>
                <ul>
                    {this.state.workoutHistory.map((item, index) => <li key={index}>workout name: {item.name}</li>)}
                </ul>
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