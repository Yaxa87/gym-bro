import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveWorkout, updateCurrentWorkout } from '../../actions/workoutActions';
import TextInputGroup from '../common/TextInputGroup';
import Modal from 'react-modal';
import ExcerciseList from './ExcerciseList';
import CurrentExcercise from './CurrentExcercise';

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
        // Copy state
        const excercisesCopy = [...this.state.currentWorkout.excercises];
        excercisesCopy.push({
            name: e.target.value,
            series: [{
                reps: '',
                weight: ''
            }]
        });

        const newCurrentWorkout = {
            name: this.state.currentWorkout.name,
            excercises: excercisesCopy
        }
        
        this.setState({currentWorkout: newCurrentWorkout});
        this.props.updateCurrentWorkout(newCurrentWorkout);
    }

    onChangeName(e) {
        const newCurrentWorkout = {
            name: e.target.value,
            excercises: this.state.currentWorkout.excercises.map(excercise => {
                return {
                    name: excercise.name,
                    series: excercise.series.map(series => {
                        return {...series};
                    })
                }
            })
        }

        this.setState({ currentWorkout: newCurrentWorkout });
        this.props.updateCurrentWorkout(newCurrentWorkout);
    }

    handleSeriesChange = (e, excercise, series) => {
        // Copy state
        const excercisesCopy = this.state.currentWorkout.excercises.map(excercise => {
            return {
                name: excercise.name,
                series: excercise.series.map(series => {
                    return {...series};
                })
            }
        });

        excercisesCopy[excercise-1].series[series-1][e.target.name] = e.target.value;

        const newCurrentWorkout = {
            name: this.state.currentWorkout.name,
            excercises: excercisesCopy
        }

        this.setState({currentWorkout: newCurrentWorkout});
        this.props.updateCurrentWorkout(newCurrentWorkout);
    }

    addSeries = (e, excercise) => {
        console.log('addSeries', excercise)
        // Copy state
        const excercisesCopy = this.state.currentWorkout.excercises.map(excercise => {
            return {
                name: excercise.name,
                series: excercise.series.map(series => {
                    return {...series};
                })
            }
        });

        console.log(excercisesCopy)

        excercisesCopy[excercise-1].series.push({
            reps: '',
            weight: ''
        });

        const newCurrentWorkout = {
            name: this.state.currentWorkout.name,
            excercises: excercisesCopy
        }

        console.log(newCurrentWorkout);

        this.setState({currentWorkout: newCurrentWorkout});
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

                            {this.state.currentWorkout.excercises.map((excercise, index) => <CurrentExcercise 
                                                                                                key={index} 
                                                                                                excercise={index+1}
                                                                                                series={excercise.series}
                                                                                                name={excercise.name} 
                                                                                                addSeries={this.addSeries}
                                                                                                handleSeriesChange={this.handleSeriesChange} 
                                                                                                
                                                                                            />)}
            
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