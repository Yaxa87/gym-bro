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
                            />)
        }
        return setsArray;
    }

    render() {
        return (
            <div className="mb-2">
                {this.props.name}

                <div className="form-row">
                    <div className="col-2">
                        <label>Set</label>
                    </div>
                    <div className="col-5">
                        <label>Weight</label>
                    </div>
                    <div className="col-5">
                        <label>Reps</label>
                    </div>
                </div>
                
                {this.renderSets()}

                <button 
                    type="button" 
                    className="btn btn-info btn-block" 
                    onClick={(e) => this.props.addSet(e, this.props.excercise)}
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
    name: PropTypes.string.isRequired
}

export default Excercise;