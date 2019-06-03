import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveWorkout, updateCurrentWorkout } from '../../actions/workoutActions';
import TextInputGroup from '../common/TextInputGroup';
import Modal from 'react-modal';
import ExcerciseList from './ExcerciseList';
import Excercise from './Excercise';

class Workout extends Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            currentWorkout: {
                name: '',
                excercises: []
            }
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        // Redirect to login page if not authenticated
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/login')
        }
    }

    selectExcercise = e => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();
        currentWorkoutCopy.excercises.push({
            name: e.target.value,
            sets: [{
                reps: '',
                weight: ''
            }]
        });
        
        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
        this.closeModal();
    }

    onChangeName(e) {
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

    addSet = (e, excercise) => {
        const currentWorkoutCopy = this.copyCurrentWorkoutState();

        currentWorkoutCopy.excercises[excercise-1].sets.push({
            reps: '',
            weight: ''
        });

        this.setState({currentWorkout: currentWorkoutCopy});
        this.props.updateCurrentWorkout(currentWorkoutCopy);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.saveWorkout(this.state.currentWorkout);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    copyCurrentWorkoutState() {
        return {
            name: this.state.currentWorkout.name,
            excercises: this.state.currentWorkout.excercises.map(excercise => {
                return {
                    name: excercise.name,
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
                addSet={this.addSet}
                handleSetChange={this.handleSetChange} 
                
            />)
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Workout</h1>
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup 
                                name="name"
                                placeholder="Workout name"
                                value={this.state.currentWorkout.name}
                                onChange={this.onChangeName}
                            />

                            {this.renderExcercises()}
            
                            <button type="button" className="btn btn-primary btn-block" onClick={this.openModal}>Add excercise</button>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                ariaHideApp={false}
                                onRequestClose={this.closeModal}
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
                                <ExcerciseList onClick={this.selectExcercise} />
                            </Modal>
                            <hr />
                            <input type="submit" value="Save workout" className="btn btn-success btn-block" />
                        </form>
                    </div>
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