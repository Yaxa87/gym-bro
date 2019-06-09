import React, { Component } from 'react';
import PropTypes from "prop-types";
import Set from './Set';

class Excercise extends Component {
    renderSets() {
        let setsArray = [];
        for (let i = 0; i < this.props.sets.length; i++) {
            setsArray.push(<Set 
                                key={i} 
                                excercise={this.props.excercise}
                                setNumber={i+1} 
                                onChange={this.props.handleSetChange} 
                                reps={this.props.sets[i].reps} 
                                weight={this.props.sets[i].weight} 
                                onRemoveSet={this.props.onRemoveSet}
                            />)
        }
        return setsArray;
    }

    render() {
        return (
            <div className="mb-3 mt-3">
                <h2 className="h5 blue-title">{this.props.name}</h2>

                <div className="excercise-container">
                    <div className="form-row">
                        <div className="col-2">
                            <label className="form-control no-border">Set</label>
                        </div>
                        <div className="col-4">
                            <div className="form-control no-border">
                                <select onChange={(e) => this.props.handleChangeWeightUnit(e, this.props.excercise)}>
                                    <option value="kg">KG</option>
                                    <option value="lbs">LBS</option>
                                    <option value="no">No.</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <label className="form-control no-border">Reps</label>
                        </div>
                    </div>
                    
                    {this.renderSets()}
                </div>
                
                <button 
                    type="button" 
                    className="btn btn-outline-info btn-block mt-2" 
                    onClick={(e) => this.props.handleAddSet(this.props.excercise)}
                >
                    <i className="fas fa-plus mr-1"></i>
                    Add set
                </button>
            </div>
        )
    }
}

Excercise.propTypes = {
    excercise: PropTypes.number.isRequired,
    handleSetChange: PropTypes.func.isRequired,
    handleAddSet: PropTypes.func.isRequired,
    sets: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onRemoveSet: PropTypes.func.isRequired,
    handleChangeWeightUnit: PropTypes.func.isRequired
}

export default Excercise;