import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveWorkout, updateCurrentWorkout } from '../../actions/workoutActions';
import TextInputGroup from '../common/TextInputGroup';
import Modal from 'react-modal';
import ExcerciseList from './ExcerciseList';
import Excercise from './Excercise';

class Workout extends Component {
    state = {
        modalIsOpen: false,
        currentWorkout: {
            name: '',
            date: new Date(),
            excercises: []
        }
    }

    componentDidMount() {
        // Redirect to login page if not authenticated
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login')
        }
    }

    handleSelectExcercise = e => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.excercises.push({
            name: e.target.value,
            weightUnit: 'kg',
            sets: [{
                reps: '',
                weight: ''
            }]
        });
        
        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
        this.handleCloseModal();
    }

    handleChangeName = e => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.name = e.target.value

        this.setState({ currentWorkout: currentWorkoutCopy });
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    handleSetChange = (e, excercise, set) => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.excercises[excercise-1].sets[set-1][e.target.name] = e.target.value;

        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    handleAddSet = excercise => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.excercises[excercise-1].sets.push({
            reps: '',
            weight: ''
        });

        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    handleRemoveSet = (excercise, set) => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();

        // Remove whole excercise if only one set exists
        if (currentWorkoutCopy.excercises[excercise-1].sets.length === 1) {
            currentWorkoutCopy.excercises.splice(excercise-1, 1);
        } else {
            currentWorkoutCopy.excercises[excercise-1].sets.splice(set-1, 1);
        }
        
        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    handleChangeWeightUnit = (e, excercise) => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.excercises[excercise - 1].weightUnit = e.target.value;
        
        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.saveWorkout(this.state.currentWorkout);
    }

    handleOpenModal = () => {
        this.setState({modalIsOpen: true});
    }

    handleCloseModal = () => {
        this.setState({modalIsOpen: false});
    }

    copyCurrentWorkoutState() {
        return {
            name: this.state.currentWorkout.name,
            date: this.state.currentWorkout.date,
            excercises: this.state.currentWorkout.excercises.map(excercise => {
                return {
                    name: excercise.name,
                    weightUnit: excercise.weightUnit,
                    sets: excercise.sets.map(set => {
                        return {...set};
                    })
                }
            })
        }
    }

    renderExcercises() {
        return (
            this.state.currentWorkout.excercises.map((excercise, index) => <Excercise 
                key={index} 
                excercise={index+1}
                sets={excercise.sets}
                name={excercise.name} 
                handleAddSet={this.handleAddSet}
                handleSetChange={this.handleSetChange} 
                onRemoveSet={this.handleRemoveSet}
                handleChangeWeightUnit={this.handleChangeWeightUnit}
            />)
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="h2 text-center">Workout</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-2">
                            <TextInputGroup 
                                name="name"
                                placeholder="Workout name"
                                value={this.state.currentWorkout.name}
                                onChange={this.handleChangeName}
                            />
                        </div>

                        {this.renderExcercises()}
        
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleOpenModal}>Add excercise</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            ariaHideApp={false}
                            onRequestClose={this.handleCloseModal}
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                                    },
                                    content: {
                                    top: '80px',
                                    bottom: '80px',
                                    left: '10px',
                                    right: '10px',
                                    border: 'none',
                                    borderRadius: '20px'
                                    }
                            }}
                        >
                            <ExcerciseList handleSelectExcercise={this.handleSelectExcercise} handleCloseModal={this.handleCloseModal} />
                        </Modal>
                        <hr />
                        <input type="submit" value="Save workout" className="btn btn-success btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}

History.propTypes = {
    saveWorkout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    updateCurrentWorkout: PropTypes.func.isRequired,
    currentWorkout: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    currentWorkout: state.currentWorkout
});

export default connect(mapStateToProps, { saveWorkout, updateCurrentWorkout })(Workout);