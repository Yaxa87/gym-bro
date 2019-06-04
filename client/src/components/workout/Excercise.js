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
                                removeSet={this.props.removeSet}
                            />)
        }
        return setsArray;
    }

    render() {
        return (
            <div className="mb-2">
                <h2 className="h5">{this.props.name}</h2>
                <div className="form-row">
                    <div className="col-2">
                        <label>Set</label>
                    </div>
                    <div className="col-4">
                        <select onChange={(e) => this.props.changeWeightUnit(e, this.props.excercise)}>
                            <option value="kg">KG</option>
                            <option value="lbs">LBS</option>
                            <option value="no">No.</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label>Reps</label>
                    </div>
                </div>
                
                {this.renderSets()}

                <button 
                    type="button" 
                    className="btn btn-outline-info btn-block mt-2" 
                    onClick={(e) => this.props.addSet(this.props.excercise)}
                >
                    Add set
                </button>
            </div>
        )
    }
}

Excercise.propTypes = {
    excercise: PropTypes.number.isRequired,
    handleSetChange: PropTypes.func.isRequired,
    addSet: PropTypes.func.isRequired,
    sets: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    removeSet: PropTypes.func.isRequired,
    changeWeightUnit: PropTypes.func.isRequired
}

export default Excercise;