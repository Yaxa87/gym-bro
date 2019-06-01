import React, { Component } from 'react';
import Series from './Series';

class CurrentExcercise extends Component {
    renderSeries() {
        let seriesArray = [];
        for (let i = 0; i < this.props.series.length; i++) {
            console.log(this.props.reps)
            seriesArray.push(<Series 
                                key={i} 
                                excercise={this.props.excercise}
                                seriesNumber={i+1} 
                                onChange={this.props.handleSeriesChange} 
                                reps={this.props.series[i].reps} 
                                weight={this.props.series[i].weight} 
                            />)
        }
        return seriesArray;
    }

    render() {
        return (
            <div className="mb-2">
                {this.props.name}

                <div className="form-row">
                    <div className="col-2">
                        <label>Series</label>
                    </div>
                    <div className="col-5">
                        <label>Weight</label>
                    </div>
                    <div className="col-5">
                        <label>Reps</label>
                    </div>
                </div>
                
                {this.renderSeries()}

                <button type="button" className="btn btn-info btn-block" onClick={(e) => this.props.addSeries(e, this.props.excercise)}>Add series</button>
            </div>
        )
    }
}

export default CurrentExcercise;