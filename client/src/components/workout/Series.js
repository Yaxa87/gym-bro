import React, { Component } from 'react';
import TextInputGroup from '../common/TextInputGroup';

class Series extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="col-2">
                    <input value={this.props.seriesNumber} className="form-control form-control-md" disabled></input>
                </div>
                <div className="col-5">
                    <TextInputGroup 
                        name="weight"
                        placeholder="weight"
                        onChange={(e) => this.props.onChange(e, this.props.excercise, this.props.seriesNumber)}
                        value={this.props.weight}
                    />
                </div>
                <div className="col-5">
                    <TextInputGroup 
                        name="reps"
                        placeholder="reps"
                        onChange={(e) => this.props.onChange(e, this.props.excercise, this.props.seriesNumber)}
                        value={this.props.reps}
                    />
                </div>
            </div>
        )
    }
}

export default Series;